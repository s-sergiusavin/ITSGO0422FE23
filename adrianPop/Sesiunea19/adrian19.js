function logStuff(stuff) {
    console.log(`Rezultatul este : ${stuff}`);
}

let sum = 0;

function addToSum(number) {
    return sum += number;
}

addToSum(3);
//addToSum(10);
logStuff(addToSum(10));
let totalSum = addToSum(10);

logStuff(totalSum);
logStuff(sum);

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

function verifyEqualitySimplified(num1, num2) {
    return num1 === num2;
}

logStuff(verifyEquality(3, 3));

function doubleValue(value) {
    return value * 2;
}

logStuff(doubleValue(3));

function sayName(name = 'default') {
    console.log(`Salut ${name}`);
}

sayName('Adrian');
sayName();

// Opreste executia-> debbuger;
// F8 revine la normal
// F10 sari peste un pas
// F11 intri intr-o functie

function removeFromNumbers(a, b) {

    if (a >= b) {
        return a - b;
    } else {
        return b - a;
    }
}

logStuff(removeFromNumbers(5, 7));
logStuff(removeFromNumbers(5, 4));
logStuff(removeFromNumbers(5, 5));

function verifyNumber(number) {
    if (number > 10 && number < 50) {
        return 'da';
    } else {
        return 'nu';
    }
}

const verifyNumberArrow = () => {
    if (number > 10 && number < 50) {
        return 'da';
    } else {
        return 'nu';
    }
}

logStuff(verifyNumber(80));
logStuff(verifyNumber(25));

const puppy = {
    name: 'Rex',
    age: 1,
    favouriteToys: ['Duck', 'Cat', 'Bone'],
    bark: function () {
        console.log('Ham!');
    },
    barkLoud: () => {
        console.log('Ham!');
    }
}
const anotherPuppy = puppy;


function nameDog(name) {
    return `Dog ${name}`;
}

const rex = nameDog('Rex');
console.log(rex);
const rexx = nameDog;
console.log(rexx('rexxx'));

const menu = {
    burger: 'Big Mac',
    juice: 'Cola',
    size: 'Large',
    'french-fires': 'With Salt'
}

console.log(menu.burger);
console.log(menu['french-fires']);

const createString = (array) => {
    let newString = '';
    for (let i = 0; i < array.length; i++) {
        newString += array[i];
    }
    return newString;
}
console.log(createString([5, '4', 3, 1, 'test']));
console.log(createString([5, '4', 3, 1, 'test222']));

const reverseValue = array => { // parantezele pot lipsi cand avem un singur parametru
    let newString = '';
    for (let i = array.length - 1; i >= 0; i--) {
        newString += array[i];
    }
    return newString;
}

console.log(reverseValue([5, '4', 3, 1, 'test222']))

const reverseArray = array => { // parantezele pot lipsi cand avem un singur parametru
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray([5, '4', 3, 1, 'test222']));

const createArray = number => {
    let newArray = [];
    for (let i = 0; i <= number; i++) {
        newArray.push(i);
    }
    return newArray;
}

console.log(createArray(8));

// Smart home app functions

let lightsValue = false;
let acValue = false;
let curtainsValue = true;
let windowsValue = false;

const toggleLights = () => {
    lightsValue = !lightsValue;
    // if (lightsValue === true)
    if (lightsValue) {
        return 'Luminile au fost aprinse';
    } else {
        return 'Luminile au fost stinse';
    }
}

const toggleAc = () => {
    acValue = !acValue;
    if (acValue) {
        return 'Ac-ul a fost aprinse';
    } else {
        return 'Ac-ul a fost stinse';
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

const playMusic = (song = 'Celine Dion') => {
    console.log('Playing .. ${song}');
}



toggleLights();
console.log(toggleLights());
toggleAc();
toggleCurtains();
toggleWindows();

smoke();