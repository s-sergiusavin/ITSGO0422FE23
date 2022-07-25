/**
 * Test object demo
 */

const example = {
    title: 'Example object',
    saiHi() {
        console.log('Hey There!');
    }
};

console.log(example.title);
example.title = 'New example';
example.saiHi();

console.log(document);
console.dir(document);

/**
 * Method to get elements by any selector
 */

const redSquare = document.querySelector('.redSquare'); // Returneaza PRIMUL element pe care il gaseste

console.log(redSquare);
redSquare.style.backgroundColor = 'green';

// css background-color => js backgroundColor
// css padding-left => js paddingLeft

const blueSquares = document.querySelectorAll('.blueSquare'); // Returneaza toate elementele care indeplinesc conditia
// const blueSquares = document.querySelectorAll("#blueSquare"); // cauta dupa id
// const blueSquares = document.querySelectorAll("blueSquare"); // cauta dupa tagName
console.log(blueSquares);

blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = "yellow";
blueSquares[2].style.backgroundColor = "yellow";

for (let i = 0; i < blueSquares.length; i++) {
    const blueSquare = blueSquares[i];
    blueSquare.style.backgroundColor = 'orange';

    // blueSquares[i].style.backgroundColor = 'yellow';
}

/**
 * Method to get element by ID
 */

const changedListJs = document.getElementById('changedList');
console.log(changedListJs);
changedListJs.style.border = '1px solid black';
changedListJs.children[0].children[4].style.backgroundColor = 'lightblue';

const changeListArray = document.querySelectorAll('.changeThis');
for (let i = 0; i < changeListArray.length; i++) {
    const currentElement = changeListArray[i];
    console.dir(currentElement);
    currentElement.innerHTML = `${i + 1} element changed by Javascript`;
}

/**
 * Method to get a HTML element by its tag name
 */

const paragraph = document.getElementsByTagName('p');
paragraph[0].innerHTML = 'This text was added later with JS';
paragraph[1].style.textTransform = 'uppercase';

/**
 * Method to get element by its class name
 */

const styledMessages = document.getElementsByClassName('styledMessages');

for (let i = 0; i < styledMessages.length; i++) {
    const tagName = styledMessages[i].tagName;
    styledMessages[i].innerHTML = `This message was in a ${tagName} element and was changed by JS`;
}

const greenBox = document.querySelector('.greenBox');

function changeGreenBox() {
    greenBox.style.backgroundColor = 'lightGreen';
}

function focusInput() {
    greenBox.style.backgroundColor = 'red';
    document.getElementsByTagName('label')[0].innerHTML = 'Changed by focus';
}

const blurInput = () => {
    greenBox.style.backgroundColor = 'black';
}

const mouseEnter = () => {
    greenBox.style.backgroundColor = 'purple';
    greenBox.style.border = "";
    greenBox.innerText = "";

}

const mouseLeave = () => {
    greenBox.style.backgroundColor = 'white';
    greenBox.style.border = '1px solid black';
    greenBox.innerText = 'black';
}

const onKeyDown = () => {
    greenBox.style.backgroundColor = 'pink';
}

const onKeyUp = () => {
    greenBox.style.backgroundColor = "teal";
};

const onDblClick = () => {
  greenBox.style.backgroundColor = "green";
  greenBox.style.border = "";
  greenBox.innerText = "";
};

const readInput = () => {
    const readValueInput = document.getElementById("readValueInput");
    console.dir(readValueInput);
    document.getElementById("textFromReadInput").innerHTML = readValueInput.value;
}

document.getElementById("readValueInput").value = 'Sergiu';


