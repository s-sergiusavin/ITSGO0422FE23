function logStuff(stuff) {
    console.log(`Rezultatul este : ${stuff}`)
}

let sum = 0;

function addToSum(number) {
    return sum = sum + number;
    // return sum += number;
}

addToSum(3);
// addToSum(10);
logStuff(addToSum(10));
let totalSum = addToSum(10);

logStuff(totalSum);



let sumNumbers = function (number1, number2) {
    return number1 + number2;
}

let sumNumbersArrow = (number1, number2) => {
    return number1 + number2;
}

let sumTwoNumbers = sumNumbersArrow(5, 10);
logStuff(sumTwoNumbers);
logStuff(sumNumbers(1, 2));



function verifyEquality(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }
}

function verifyEqualitySimplified (num1, num2) {
    return num1 === num2;
}

logStuff(verifyEquality(2, 2));



function doubleValue(value) {
    return value * 2;
    console.log('Ceva');
}

logStuff(doubleValue(3));



function sayName(name = 'Klaudia') {
    console.log(`Salut ${name}`);
    console.log("Salut " + name);
}

sayName();
sayName('Roberta');



// F8  ---> revine la normal
// F10  ---> sari peste 1 pas
// F11  ---> intri intr-o functie 

function removeFromNumbers(a,b) {
    // debugger;  ---> opreste executia
    if (a >= b) {
        return a - b;
    } else {
        b - a;
    }
}

logStuff(removeFromNumbers(5,7));
logStuff(removeFromNumbers(5,4));
logStuff(removeFromNumbers(5,5));



function verifyNumber(number) {
    if (number > 10 && number < 50) {
        return 'Da';
    } else {
        return 'Nu';
    }
}

const verifyNumberArrow = () => {
    if (number > 10 && number < 50) {
        return 'Da';
    } else {
        return 'Nu';
    }
}

logStuff(verifyNumber(80));
logStuff(verifyNumber(30));
logStuff(verifyNumber(10.5));



const puppy = {
    name: "Sofia",
    age: 5,
    favouriteToys: ["Octopus", "Alien", "Teddy"],
    bark: function () {
        console.log('Ham!');
    },
    barkLoud: () => {
        console.log('HAM!');
    }
}

const anotherPuppy = puppy;
const yetAnotherPuppy = {
    name: 'Dora',
    bark() {
        console.log('Ham!');
    },
    age: 1
}

anotherPuppy.bark();
console.log(anotherPuppy.name);
anotherPuppy.name = 'Sofffia';
console.log(anotherPuppy.name);
console.log(puppy.name);



function nameDog(name) {
    return `Dog ${name}`;
}

const sofia = nameDog('Sofia');
console.log(sofia);

const soffia = nameDog;
// const soffia = (name) => {
//     return `Dog ${name}`;
// }
console.log(soffia('Sofffia'));



const menu = {
    burger: 'McChicken',
    juice: 'Sprite',
    size: 'Big',
    'french-fries': 'Classic'
}

console.log(menu.burger);
console.log(menu["french-fries"]);



const createString = (array) => {
    let newString = '';
    for (let i = 0; i < array.length; i++) {
        newString += array[i];
    }
    return newString;
}

console.log(createString([3, '5', 7, 2, 1]));
console.log(createString([2, '7294', 17, 22, 1]));



const reverseValue = array => {         // daca folosim 1 singur parametru intr-un arrow function, nu e necesar sa mai folosim ()
    let newString = '';
    for (let i = array.length - 1; i >= 0; i++) {
        newString += array[i];
    }
    return newString;
}

console.log(reverseValue([1, 2, 3, 4]));



const reverseArray = array => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i++) {
        newString.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray([1, 2, 3, 4]));



const createArray = number => {
    let newArray = [];
    for ( let i = 0; i<= number; i++) {
        newArray.push(i);
    }
    return newArray;
}

console.log(createArray(8));



// Smart-Home App functions
let lightsValue = false;
let acValue = false;
let curtainsValue = true;
let windowsValue = true;

const toggleLigths = () => {
    lightsValue = !lightsValue;
    if (lightsValue) {
        return 'Luminile au fost aprinse';
    } else {
        return 'Luminile au fost stinse';
    }
}


const toggleAc = () => {
    acValue = !acValue;
    if (acValue) {
        return 'AC-ul a fost apornit';
    } else {
        return 'AC-ul a fost oprit';
    }
}


const toggleCurtains = () => {
    curtainsValue = !curtainsValue;
    if (curtainsValue) {
        return 'Draperiile au fost deschise';
    } else {
        return 'Draperiile au fost inchise';
    }
}


const toggleWindows = () => {
    windowsValue = !windowsValue;
    if (windowsValue) {
        return 'Geamurile au fost deschise';
    } else {
        return 'Geamurile au fost inchise';
    }
}


const smoke = () => {
    if (!windowsValue) {
        toggleWindows();
    }

    if (acValue) {
        toggleAc();
    }

    console.log('Smoking...');

    if ('Winter') {
        toggleWindows();
    }
}


const playMusic = (artist = 'BTS') => {
    console.log(`Playing ${artist}`);
}

toggleLigths();
console.log(lightsValue());
toggleAc();
toggleCurtains();
toggleWindows();
smoke();
