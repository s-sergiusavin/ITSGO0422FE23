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
const listItemsElements = document.querySelectorAll("li");

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
  if(toggleValue){

  }else{
    
  }
}
