/**
 *                                      Method to get elements by any selector
 */

const redSquare = document.querySelector(".redSquare"); //returneaza PRIMUL elem gasit!

console.log(redSquare);
redSquare.style.backgroundColor = "green";

const blueSquares = document.querySelectorAll(".bgBlue"); //returneaza TOATE elem gasite, ca si COLECTIE!
console.log(blueSquares);
blueSquares[0].style.backgroundColor = "yellow";

blueSquares.forEach((blueSquare) => {
  blueSquare.style.backgroundColor = "yellow";
});

const changedListJs = document.getElementById("changeList");
console.log(changedListJs);
changedListJs.style.border = "1px solid black";

const changeListArray = document.querySelectorAll(".changeThis");

for (let i = 0; i < changeListArray.length; i++) {
  const element = changeListArray[i];
  element.innerHTML = `${i + 1} changed in JS`;
}

const allParagraphs = document.getElementsByTagName("p");
allParagraphs[0].innerHTML = "dis wuz added later with JS";
allParagraphs[1].style.textTransform = "uppercase";

/**
 *
 *                                  Method to get elements by class name
 *
 */

const styledMessages = document.getElementsByClassName("styledMessages");

for (let i = 0; i < styledMessages.length; i++) {
  const tagName = styledMessages[i].tagName;
  styledMessages[
    i
  ].innerHTML = `This message was in a ${tagName} element and was changed in JS`;
}

const greenBox = document.querySelector(".bgGreen");

function changeGreenBox() {
  greenBox.style.backgroundColor = "rebeccapurple";
}

function focusInput() {
  greenBox.style.backgroundColor = "red";
  document.getElementsByTagName("label")[0].innerHTML = "Changed by focus";
}
function blurInput() {
  greenBox.style.backgroundColor = "black";
  document.getElementsByTagName("label")[0].innerHTML = "Demo inputs events";
}

function mouseLeave() {
  greenBox.style.backgroundColor = "purple";
  greenBox.innerText = "";
  greenBox.style.border = "";
}
function mouseEnter() {
  greenBox.style.backgroundColor = "white";
  greenBox.style.border = "1px solid rebeccapurple";
  greenBox.innerText = "Winning number is 14! You Won!";
  greenBox.style.display = "flex";
  greenBox.style.padding = "6px";
  greenBox.style.alignItems = "center";
  greenBox.style.justifyContent = "center";
}

function onKeyDown() {
  greenBox.style.backgroundColor = "pink";
}
function onKeyUp() {
  greenBox.style.backgroundColor = "teal";
}

function doubleClick() {
  greenBox.style.backgroundColor = "green";
}

function readInput() {
  const readValueInput = document.getElementById("readValueInput");
  document.getElementById("textFromReadInput").innerHTML = readValueInput.value;
}

const popup = () => {
  alert("Are you sure?");
};

function changeBorder() {
  buttonStyle = document.querySelector("#submitButton").style;
  buttonStyle.border = "2px solid rebeccapurple";
  buttonStyle.padding = "5px 20px";
  buttonStyle.borderRadius = "20px";
}
function resetBorder() {
  buttonStyle = document.querySelector("#submitButton").style;
  buttonStyle.border = "";
  buttonStyle.padding = "0px";
  buttonStyle.borderRadius = "0px";
}
