// TEST OBJECT DEMO

const example = {
    title: 'Example object',
    sayHi() {
        console.log('Hey there!');
    }
};
console.log(example.title);
example.title = 'New example';
example.sayHi();


console.log(document);
console.dir(document);




// 1. Method to get elem by any selector
const redSquare = document.querySelector('.redSquare');    // ---> retuneaza PRIMUL ELEM pe care-l gaseste
console.log(redSquare);

redSquare.style.backgroundColor = 'green';

// !!!!  ---> css - background-color  =>  js - backgroundColor

const blueSquares = document.querySelectorAll('.blueSquare');    // ---> retuneaza TOATE ELEM care indeplinesc conditia
// const blueSquares = document.querySelectorAll('#blueSquare');   ---> cauta dupa id
// const blueSquares = document.querySelectorAll('blueSquare');   ---> cauta dupa tagName
console.log(blueSquares);

blueSquares[0].style.backgroundColor = 'yellow';
blueSquares[1].style.backgroundColor = 'yellow';
blueSquares[2].style.backgroundColor = 'yellow';
//                 SAU
for (let i = 0; i < blueSquares.length; i++) {
    const blueSquare = blueSquares[i];
    blueSquare.style.backgroundColor = 'orange';
    //                 SAU
    // blueSquares[i].style.backgroundColor = 'yellow';
}




// 2. Method to get elem by id
const changedListJs = document.getElementById('changedList');    // ---> retuneaza un singur elem
console.log(changedListJs);
changedListJs.style.border = '1px solid black';

// debugger;

const changeListArray = document.querySelectorAll('.changeThis');
for (let i = 0; i < changeListArray.length; i++) {
    const currentElement = changeListArray[i];
    currentElement.innerHTML = `${i + 1} element changed by JavaScript`;
}




// 3. Method to get a HTML elem by its tagName
const paragraph = document.getElementsByTagName('p');
paragraph[0].innerHTML = 'This text was added later with JS.'
paragraph[1].style.textTransform = 'uppercase';




// 4. Method to get an elem by its class name
const styledMessagesJs = document.getElementsByClassName('styledMessages');
for (let i = 0; i< styledMessagesJs.length; i++) {
    const tagName = styledMessagesJs[i].tagName;
    styledMessagesJs[i].innerHTML = `This message was in a ${tagName} element and was changed by JS.`;
}


const greenBox = document.querySelector('.greenBox');
function changeGreenBox() {
    greenBox.style.backgroundColor = 'lightGreen';
}

function focusInput() {
    greenBox.style.backgroundColor = 'gray';
    document.getElementsByTagName('label')[0].innerHTML = 'Changed by focus';
}

const blurInput = () => {
    greenBox.style.backgroundColor = 'black';
    document.getElementsByTagName('label')[0].innerHTML = 'Changed by blur';
}



const mouseEnter = () => {
    greenBox.style.backgroundColor = 'purple';
    greenBox.style.border = '';
    greenBox.innerText = '';
}

const mouseLeave = () => {
    greenBox.style.backgroundColor = 'white';
    greenBox.style.border = '1px solid black';
    greenBox.innerText = 'white box';
}



const onKeyDown = () => {
    greenBox.style.backgroundColor = 'pink';

}

const onKeyUp = () => {
    greenBox.style.backgroundColor = 'turquoise'
}



const onDblClick = () => {
    greenBox.style.backgroundColor = 'green';
    greenBox.style.border = '';
    greenBox.innerText = '';
}



const readInput = () => {
    const readValueInput = document.getElementById('readValueInput');
    console.dir(readValueInput);
    document.getElementById('textFromReadInput').innerHTML = readValueInput.value;
}


// document.getElementById('')      ????????