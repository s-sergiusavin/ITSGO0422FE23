console.log("Session 22 begins!");
const demoBoxElement = document.querySelector("#testBox");

demoBoxElement.className = "red";
console.dir(demoBoxElement);
demoBoxElement.className = "";
demoBoxElement.classList.add("blue"); //              add class
demoBoxElement.classList.add("squareText");
demoBoxElement.classList.remove("squareBox"); //              remove class
demoBoxElement.classList.toggle("squareBox"); //              toggle class

//                                          Get or set attributes

const image1 = document.querySelector("#demoImage");
console.log(image1);
const newImageElement = document.getElementById("newImage");

const imgSrc = image1.getAttribute("src");

newImageElement.setAttribute("src", imgSrc);
newImageElement.setAttribute(
  "src",
  "https://cdn.theculturetrip.com/wp-content/uploads/2021/01/2a3cdjn-1.jpg"
);

console.log(newImageElement);

/**
 *
 *                                                      EVENT LISTENERS
 *
 */

const unListElement = document.getElementsByTagName("ul")[0];
const listItemElements = document.querySelectorAll("li");

// unListElement.addEventListener("click", () => {
//   unListElement.classList.toggle("blue");
// });

for (let i = 0; i < listItemElements.length; i++) {
  const listElement = listItemElements[i];
  //   console.log(listElement);
  //   listElement.addEventListener("mouseover", function () {
  //     this.classList.add("red");
  //   });
  //   listElement.addEventListener("mouseout", function () {
  //     this.classList.remove("red");
  //   });
  listElement.addEventListener("click", toggleListItems);
}

function toggleListItems() {
  const toggleValue = this.classList.toggle("red");
  console.log(toggleValue);
  let nr = 0;
  if (toggleValue) {
    const span = document.createElement("span");
    span.innerHTML = `${(nr + 1).toString()}`;
    demoBoxElement.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove();
    this.remove();
  }
}

const clickMeElement = document.getElementById("clickMe");
clickMeElement.style.cursor = "pointer";

const demoInputElement = document.getElementById("demoInput");
demoInputElement.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 && demoInputElement.value.length > 3) {
    demoInputElement.style.background = "rebeccapurple";
    console.log(demoInputElement.value);
  }
});

clickMeElement.addEventListener("click", function () {
  const newListElement = document.createElement("li");
  unListElement.appendChild(newListElement);
  if (demoInputElement.value) {
    newListElement.innerHTML = demoInputElement.value;
    demoInputElement.value = "";
  } else {
    newListElement.innerHTML = `elem ${listItemElements.length}`;
  }
});

const toDoInputElement = document.getElementById("toDoInput");
const addButtonElement = document.getElementsByClassName("addButton")[0];
const toDoListElement = document.getElementsByClassName("toDoListItems")[0];

addButtonElement.addEventListener("click", function () {
  if (toDoInputElement) {
    const newListItem = document.createElement("li");
    newListItem.className = "newListItems";
    toDoListElement.appendChild(newListItem);
    newListItem.addEventListener("dblclick", function () {
      this.remove();
    });
    newListItem.innerHTML = toDoInputElement.value;
    toDoInputElement.value = "";
  }
});
// toata logica de mai sus sa se intample doar in functia de mai jos
// sa nu putem adauga mai mult de TREI elemente, conform functiei de mai jos
//styling pentru formularul acesta
function checkPlan() {
  const newListItemsNumber = document.getElementsByClassName("newListItems");
  return newListItemsNumber < 3;
}
