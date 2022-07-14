function logStuff(stuff) {
    console.log(`Rezultatul este : ${stuff}`);
}

let sum = 0;

function addToSum(number) {
    return sum = sum + number;
}

addToSum(3);
addToSum(10);
let totalSum = addToSum(10);


logStuff(totalSum);
logStuff(sum);


let sumNumbers = function (number1, number2) {
    return number1 + number2;
}

let sumNumbersArrow = (number1, number2) => {
    return number1 + number2;
}

let sumTwoNumbers = sumNumbersArrow(5,10);
logStuff(sumTwoNumbers);
logStuff(sumNumbers(1,2));

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

logStuff(verifyEquality(2,2));

function doubleValue(value) {
    return value * 2; 
    
}

logStuff(doubleValue(3));

function sayName(name = 'Andrei') {
    console.log(`Salut ${name}`);
}

sayName();

// debugger opreste executia
// F8 - revine la normal
// F10 - sari peste un pas
// F11 - intri intr-o functie


function removeFromNumbers(a,b) {
   
    if(a >= b) {
        return a - b;
    } else {
        return b - a;
    }
}

logStuff(removeFromNumbers(5,7));
logStuff(removeFromNumbers(5,4));
logStuff(removeFromNumbers(5,5));

function verifyNumber(number) {
    if(number > 10 && number < 50) {
        return 'Da';
    } else {
        return 'Nu';
    }
}

const verifyNumberArrow = () => {
    if(number > 10 && number < 50) {
        return 'Da';
    } else {
        return 'Nu';
    }
}

logStuff(verifyNumber(80));
logStuff(verifyNumber(30));

const puppy = {
    name: 'Rex',
    age: 1,
    favouriteToys: ['Duck', 'Cat', 'Bone'],
    bark: function () {
        console.log('Ham!');
    },
    barkLoud: () => {
        console.log('HAM!')
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

function  nameDog(name) {
    return `Dog ${name}`;
}

const rex = nameDog('Rex');
console.log(rex);

const rexx = nameDog;
console.log(rexx('Rexxx'));

const menu = {
    burger: 'Big Mac',
    juice: 'Cola',
    size: 'Big',
    'french-fries': 'With Salt'
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

const reverseValue = array => {
    let newString = '';
    for (let i = array.length - 1; i >= 0; i--) {
        newString += array[i];
    }
    return newString;
};

console.log(reverseValue([1,2,3,4]));

const reverseArray = array => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
};

console.log(reverseArray([1,2,3,4]));

const createArray = number => {
    let newArray = [];
    for (let i = 0; i <= number; i++) {
        newArray.push(i)
    }
    return newArray;
}

console.log(createArray(8));

// Smart home app functions

let lightsValue = false;
let acValue = false;
let curtainsValue = true;
let windowsValue = false;
let garageDoorValue = true;
let alarmValue = true;
let remoteValue = true;
let showerValue = false;

const toggleLights = () => {
    lightsValue = !lightsValue;
    if (lightsValue) {
        return 'Luminile au fost aprinse';
    } else {
        return 'Luminile au fost stinse';
    }
}

const toggleAc = () => {
    acValue = !acValue;
    if (lightsValue) {
        return 'AC-ul a fost aprins';
    } else {
        return 'AC-ul a fost stins';
    }
}

const toggleCurtains = () => {
    curtainsValue = !curtainsValue;
    if(curtainsValue){
        return "Draperiile au fost deschise";
    } else {
        return "Draperiile au fost inchise";
    }
    
}

const toggleWindows = () => {
    windowsValue = !windowsValue;
    if(windowsValue){
        return "Geamurile au fost deschise";
    } else {
        return "Geamurile au fost inchise";
    }
}

const smoke = () => {
 
    if(!windowsValue) {
        toggleWindows();
    }

    if(acValue) {
        toggleAc();
    }
    
    console.log('Smoking...');
    
    toggleWindows();
}

const playMusic = (song = 'Celine Dion') => {
    console.log(`Playing... ${song}`);
}

const toggleGarageDoor = () => {
        garageDoorValue = !garageDoorValue
        if(garageDoorValue){
            return "Usa de la garaj este inchisa"
        } else {
            return "Usa de la garaj este deschisa"
        }
}

const toggleAlarm = () => {
        alarmValue = !alarmValue
        if(alarmValue){
            return "Alarma este oprita"
        } else {
            return "Alarma este pornita"
        }
}

const toggleTv = () => {
        remoteValue = !remoteValue
        if(remoteValue){
            return "Televizorul este pornit"
        } else {
            return "Televizorul este oprit"
        }
}

const toggleShower = () => {
        showerValue = !showerValue
        if(showerValue){
            return  "Dusul este pornit"
        } else {
            return "Dusul este oprit"
        }
}





toggleLights();
console.log(toggleLights());

toggleAc();
console.log(toggleAc());

toggleCurtains();
console.log(toggleCurtains());

toggleWindows();
console.log(toggleWindows());

smoke();


toggleGarageDoor();
console.log(toggleGarageDoor());

toggleAlarm();
console.log(toggleAlarm());

toggleTv();
console.log(toggleTv());

toggleShower();
console.log(toggleShower());