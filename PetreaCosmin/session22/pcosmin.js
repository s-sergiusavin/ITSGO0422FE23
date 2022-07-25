const demoBoxElement = document.getElementById("testBox");
console.log(demoBoxElement);
console.dir(demoBoxElement);

demoBoxElement.className = "red";
console.dir(demoBoxElement);
demoBoxElement.className = "";

demoBoxElement.classList.add("blue");
demoBoxElement.classList.remove("blue");
demoBoxElement.classList.toggle("blue");

// Get or Set attributes

const demoImageElement = document.getElementById("demoImage");
const newImageElement = document.getElementById("newImage");

const imgSrc = demoImageElement.getAttribute("src");
newImageElement.setAttribute("src", imgSrc);
newImageElement.setAttribute(
  "src",
  "https://www.rjontour.com/wp-content/uploads/2021/01/Black-Church-From-Brasov-Main-Square-1024x768.jpg"
);

console.dir(newImageElement);

//Event listeners

const unlistElement = document.getElementsByTagName("ul")[0];
let listItemsElements = document.querySelectorAll("li");

// unlistElement.addEventListener("click", () => {
//   unlistElement.classList.toggle("blue");
// });

for (let i = 0; i < listItemsElements.length; i++) {
  const listElement = listItemsElements[i];
  console.log(listElement);
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
  if (toggleValue) {
    const span = document.createElement("span");
    span.innerHTML = "x";
    this.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove();
    // this.remove();
  }
}

const clickMeElement = document.getElementById("clickMe");
clickMeElement.style.cursor = "pointer";

const demoInputElement = document.getElementById("demoInput");
demoInputElement.addEventListener("keypress", function (event) {
  console.log(event);
  if (event.keyCode === 13 && demoInputElement.value.length > 3) {
    demoInputElement.style.background = "green";
    console.log(demoInputElement.value);
    console.log(demoInputElement.value.length);
  }
});

clickMeElement.addEventListener("click", function () {
  const newListElement = document.createElement("li");
  unlistElement.appendChild(newListElement);
  listItemsElements = document.querySelectorAll("li");
  if (demoInputElement.value) {
    newListElement.innerHTML = demoInputElement.value;
  } else {
    newListElement.innerHTML = "Elem " + listItemsElements.length;
  }
});

const toDoInputElement = document.getElementById("toDoInput");
const addButtonElement = document.getElementsByClassName("addButton")[0];
const toDoListElement = document.getElementsByClassName("toDoListItems")[0];

addButtonElement.addEventListener("click", function () {
  if (toDoInputElement.value) {
    const newListItem = document.createElement("li");
    newListItem.className = "newListItems";
    newListItem.addEventListener("dblclick", function () {
      this.remove();
    });
    toDoListElement.appendChild(newListItem);
    newListItem.innerHTML = toDoInputElement.value;
    toDoInputElement.value = "";
  }
});

function checkPlan() {
  const newListItemsNumber = document.getElementsByClassName("newListItems");
  return newListItemsNumber < 3;
}
