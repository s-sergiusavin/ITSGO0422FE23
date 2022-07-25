console.log(document);
console.dir(document);

/**
 * Method to get elements by any selector
 */

const redSquare = document.querySelector('.redSquare'); // Returneaza primul element pe care il gaseste

console.log(redSquare);
redSquare.style.backgroundColor = 'green';

// css background-color => JS backgroundColor

const buleSquares = document.querySelectorAll('.blueSquare'); // Returneaza toate elem care indeplinesc conditia
console.log(buleSquares);

buleSquares[0].style.backgroundColor = 'yellow';
buleSquares[1].style.backgroundColor = 'yellow';
buleSquares[2].style.backgroundColor = 'yellow';

const changedListJs = document.getElementById('changedList');
console.log(changedListJs);
changedListJs.style.border = '1px solid black'

const changeListArray = document.querySelectorAll('.changeThis');
for (let i = 0; i < changeListArray.length; i++){
    const currentElement = changeListArray[i];
    currentElement.innerHTML = `${i + 1} element changed change by JavaScript`;
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
    styledMessages[i].innerHTML = `This message was in a ${tagName} element and was changed by Js`;
}

const greenBox = document.querySelector('.greenBox');

function changeGreenBox(){
    greenBox.style.backgroundColor = 'lightgreen';
}

function focusInput(){
    greenBox.style.backgroundColor = 'red';
    document.getElementsByTagName('label')[0].innerHTML = 'Changed by focus';
}

const blurInput = () => {
    greenBox.style.backgroundColor = 'black';
}

const mouseEnter = () => {
    greenBox.style.backgroundColor = 'purple';
    greenBox.style.border = '';
    greenBox.innerText = '';
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
    greenBox.style.backgroundColor = 'teal';
}

const onDblClick = () => {
    greenBox.style.backgroundColor = 'green';
    greenBox.style.border = '';
    greenBox.innerText = '';
}

const readInput = () => {
    const readValueInput = document.getElementById("readValueInput");
    console.dir(readValueInput);
    document.getElementById("textFromReadInput").innerHTML = readValueInput.value;
}

document.getElementById("readValueInput").value = 'sergiu';


/**
 * Tema
 */

 const modal = document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const btnCloseModal = document.querySelector('.close-modal');
 const btnOpenModal = document.querySelector('show-modal');
 
 const openModal = () => {
     modal.classList.remove('hidden');
     overlay.classList.remove('hidden');
 }
 
 const closeModal = () => {
     modal.classList.add('hidden');
     overlay.classList.add('hidden');
 }
 
 document.addEventListener('keydown', function (e){
     if (e.key === 'Escape') {
         if(!modal.classList.contains('hidden')) {
             closeModal();
         }
     }
 });