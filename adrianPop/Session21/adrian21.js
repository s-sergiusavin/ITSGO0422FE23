console.log(document);
console.dir(document);

/**
 * Method to get elements by any selector
 */

/**
 *  Returneaza primul element
 */
const redSquare = document.querySelector('.redSquare'); // returneaza/identifica PRIMUL element pe care il gaseste.

console.log(redSquare);
console.dir(redSquare);

redSquare.style.backgroundColor = 'green';

/**
 *  Returneaza toate elementele
 */
const blueSquares = document.querySelectorAll('.blueSquare'); // returneaza TOATE elementele care indeplinesc conditia
// const blueSquares = document.querySelectorAll('#blueSquare'); // cauta dupa id
// const blueSquares = document.querySelectorAll('.blueSquare'); // cauta dupa tagName
console.log(blueSquares);

blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';

for (let i = 0; i < blueSquares.length; i++) {
    const blueSquare = blueSquares[i];
    blueSquare.style.backgroundColor = 'orange';

    //blueSquares[i].style.backgroundColor = 'orange';
}

/**
 * Method to get element by ID
 */

const changedListJS = document.getElementById('changedList'); // face acelasi lucru ca si querySelector doar ca se scrie diferit
console.log(changedListJS);
changedListJS.style.border = '1px solid black';
changedListJS.children[0].children[4].style.backgroundColor='lightblue';

const changeListArray = document.querySelectorAll('.changeThis');

for (let i = 0; i < changeListArray.length; i++) {
    const currentElement = changeListArray[i];
    currentElement.innerHTML = `${i + 1} element changed by Javascript`;
}

/**
 * Method to get a HTML element by its tag name
 */
const paragraph = document.getElementsByTagName('p'); // similar cu querySelectorAll
paragraph[0].innerHTML = 'This text was added later with JS';
paragraph[1].style.textTransform = 'uppercase';

/**
 * Method to get element by its class name
 */

const styledMessages = document.getElementsByClassName('styledMessages');

for (let i = 0; i < styledMessages.length; i++) {
    const tagName = styledMessages[i].tagName;
    styledMessages[i].innerHTML = `This message was in a ${tagName} element and was changed bu JS`;
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
    greenBox.style.backgroundColor = 'black'
};

const mouseEnter = () => {
    greenBox.style.backgroundColor = 'purple';
    greenBox.style.border = '';
    greenBox.innerText = '';
};


const mouseLeave = () => {
    greenBox.style.backgroundColor = 'white';
    greenBox.style.border = '1px solid black';
    greenBox.innerText = 'black';
};

const onKeyDown = () => {
    greenBox.style.backgroundColor = 'pink';
};

const onKeyUp = () => {
    greenBox.style.backgroundColor = 'teal';
};

const ondblClick = () => {
    greenBox.style.backgroundColor = 'green';
    greenBox.style.border = '';
    greenBox.innerText = '';
};

const readInput = () => {
    const readValueInput = document.getElementById('readValueInput');
    document.getElementById('textFromReadInput').innerHTML = readValueInput.value;
}

