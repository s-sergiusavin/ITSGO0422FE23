/* test oject demo */

const example = {
  title: "Example object",
  saiHi() {
    console.log("Hey there!");
  },
};

console.log(example.title);
example.title = "Hello There";
example.saiHi();

console.log(document);
console.dir(document);

/**Method to get any document by selector */
const redSquare = document.querySelector(".redSquare"); //returneaza sau ne identifica primul element pe care il gaseste
console.log(redSquare);

redSquare.style.backgroundColor = "green";
// css background-color => js backgroundColor
// css padding-left => js paddingLeft

const blueSquares = document.querySelectorAll(".blueSquare"); // returneaza toate elementele care indeplinesc conditie
// const blueSquares = document.querySelectorAll("#blueSquare"); // cauta dupa id
// const blueSquares = document.querySelectorAll("blueSquare"); // cauta dupa tagName

console.log(blueSquares);
// blueSquares[0].style.backgroundColor = "yellow";
// blueSquares[1].style.backgroundColor = "yellow";
// blueSquares[2].style.backgroundColor = "yellow";

for (let i = 0; i < blueSquares.length; i++) {
  const blueSquare = blueSquares[i];
  blueSquare.style.backgroundColor = "yellow";
}

/**
 * Method get element by id
 */

const changedListJs = document.getElementById("changedList");
console.log(changedListJs);
changedListJs.style.border = "1px solid black";

const changedListArray = document.querySelectorAll(".changeThis");
for (let i = 0; i < changedListArray.length; i++) {
  const currentElement = changedListArray[i];
  currentElement.innerHTML = `${i + 1} element changed by Javascript`;
}
/**
 * Method to get elementS by tag name
 */
const paragraph = document.getElementsByTagName("p");
paragraph[0].innerHTML = "this text was changed later with JSSSSS";
paragraph[1].style.textTransform = "uppercase";
/**
 * METHOD TO GET ELEMENT BY ITS CLASS NAME
 */

const styledMessages = document.getElementsByClassName("styledMessages");

for (let i = 0; i < styledMessages.length; i++) {
  const tagName = styledMessages[i].tagName;
  styledMessages[
    i
  ].innerHTML = `This messages was in a ${tagName} element and was changed by js`;
}

const greenBox = document.querySelector(".greenBox");

function changeGreenBox() {
  greenBox.style.backgroundColor = "purple";
}

function focusInput() {
  greenBox.style.backgroundColor = "red";
  document.getElementsByTagName("label")[0].innerHTML = `changed by focus`;
}
function blurInput() {
  greenBox.style.backgroundColor = "black";
}

const mouseEnter = () => {
  greenBox.style.backgroundColor = "blue";
  greenBox.style.border = "";
  greenBox.innerText = "";
};
const mouseLeave = () => {
  greenBox.style.backgroundColor = "white";
  greenBox.style.border = "1px solid black";
  greenBox.innerText = "black";
};

const onKeyDown = () => {
  greenBox.style.backgroundColor = "pink";
};
const onKeyUp = () => {
  greenBox.style.backgroundColor = "aqua";
};
const onDblClick = () => {
  greenBox.style.backgroundColor = "";
  greenBox.style.border = "";
  greenBox.innerText = "";
};
const readInput = () => {
  const readValueInput = document.getElementById("readValueInput");
  document.getElementById("textFromReadInput").innerHTML = readValueInput.value;
};
