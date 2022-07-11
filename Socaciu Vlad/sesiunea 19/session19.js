function logStuff(stuff){
    console.log(`Rezultatul este: ${stuff}`);
}

let sum = 0;

function addToSum(number){
    return sum = sum + number;
}

addToSum(3);
// addToSum(10); 
logStuff(addToSum(10));
let totalSum = addToSum (10);

logStuff(totalSum);
logStuff(sum); 

let sumNumbers = function (number1, number2){
    return number1 + number2;
}

let sumNumbersArrow = (number1, number2) => {
    return number1 + number2;
}

let sumTwoNumbers = sumNumbersArrow (5, 10);
logStuff(sumTwoNumbers);
logStuff(sumNumbers(1,2));

function verifyEquality(num1, num2){
    if (num1 === num2){
        return true;
    } else {
        return false;
    }
}

function verifyEqualitySimplified(num1, num2){
    return num1 === num2;
}


logStuff(verifyEquality(2,2));

function doubleValue(value){
    return value * 2;
    console.log('ceva');
}

logStuff(doubleValue(3));

function sayName (name = 'vlad'){
    console.log(`salut ${name}`); 
}

sayName();
sayName('lucian');

// debugger; opreste executia
// F8 revine la normal
// F10 sari peste un pas
// F11 intri intr-o functie

function removeFromNumbers(a, b){
    if(a >= b){
        return a - b;
    } else {
        return b - a;
    }
}

logStuff(removeFromNumbers(5, 7));
logStuff(removeFromNumbers(5, 4));
logStuff(removeFromNumbers(5, 5));

function verifyNumber (num) {
    if (num > 10 && num < 50){
        return 'da';
    } else {
        return 'nu';
    }
}

logStuff(verifyNumber(80));
logStuff(verifyNumber(10.5));

const verifyNumberArrow = (num) => {
    if (num > 10 && num < 50){
        return 'da';
    } else {
        return 'nu';
    }
}

const puppy = {
    name: 'Rex',
    age: 8,
    favoriteToys: ['Duck', 'Cat', 'Bone'],
    bark: function () {
        console.log('Ham!');
    },
    barkLoud: () => {
        console.log('HAM!');
    }
}

const anotherPuppy = puppy;
const yetAnotherPuppy = {
    name: 'Rexx',
    bark() {
        console.log('Ham!');
    },
    age: 2
}

anotherPuppy.bark();
console.log(anotherPuppy.name);
anotherPuppy.name = 'Rexxx';
console.log(anotherPuppy.name);
console.log(puppy.name);

function nameDog(name) {
    return `Dog ${name}`;
}

const rex = nameDog('Rex');
console.log(rex);

const rexx = nameDog;
// const rexx = (name) => {
//     return `Dog ${name}`;
// }
console.log(rexx('Rexxx'));

const menu = {
    burger: 'Big Mac',
    juice: 'Cola',
    size: 'Big',
    'french-fries': 'With salt'
}

console.log(menu.burger);
console.log(menu["french-fries"]);

const createString = (array) => {
    let newString = '';
    for (let i = 0; i < array.length; i++){
        newString += array[i];
    }
    return newString;
}

console.log(createString([3, '5', 7, 2, 1])); 
console.log(createString([4, '17', 65, 12, 5])); 

const reversValue = array => { // tot arrow function, dar parantezele pot lipsi cand avem un singur parametru
    let newString = '';
    for (let i = array.length-1; i >= 0; i--){
        newString += array[i];
    }
    return newString;
}

console.log(reversValue([1,2,3,4]));

const reverseArray = array => { // tot arrow function, dar parantezele pot lipsi cand avem un singur parametru
    let newArray = [];
    for (let i = array.length-1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray([1,2,3,4]));

const createArray = number => {
    let newArray=[];
    for(let i = 0; i <= number; i++) {
        newArray.push(i);
    }
    return newArray;
}
console.log(createArray(8));

// Smart home app Functions

let lightsValue = false;
let acValue = false;
let curtainsValue = true;
let windowsValue = false;

const toggleLights = () => {
    lightsValue = !lightsValue;
    // if (lightsValue === true) 
    if (lightsValue){
        return 'Luminile au fost aprinse';
    } else {
        return 'Luminile au fost stinse';
    }
}

const toggleAc = () => {
    acValue = !acValue;
    if (acValue){
        return 'Ac-ul a fost pornit';
    } else {
        return 'Ac-ul a fost oprit';
    }
} 

const toggleCurtains = () => {
    curtainsValue = !curtainsValue;
    if (curtainsValue){
        return "draperiile au fost deschise";
    } else {
        return "draperiile au fost inchise";
    }
} 

const toggleWindows = () => {
    windowsValue = !windowsValue;
    if (windowsValue){
        return 'geamurile au fost deschise';
    } else {
        return 'geamurile au fost inchise';
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

let musicValue = false;
const playMusic = (song = 'Celine Dion') => {
    console.log(`Playing .. ${song}`);
}



toggleLights();
console.log(toggleLights());
console.log(toggleAc()); 
console.log(toggleCurtains()); 
console.log(toggleWindows());

smoke();
