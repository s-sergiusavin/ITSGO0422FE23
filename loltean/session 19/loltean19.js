function logStuff(stuff) {
    console.log(`Rezultatul este : ${stuff}`);
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
logStuff(sum)

let sumNumbers = function (number1, number2) {
    return number1 + number2;
}

let sumNumbersArrow = (number1, number2) => {
    return number1 + number2;
}

let sumTwoNumbers = sumNumbersArrow(5, 10);
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
    return value *2;
    console.log(`Ceva`);
}

logStuff(doubleValue(3));

function sayName(name = 'Lucian') {
    console.log (`Salut ${name}`);
    console.log ("Salut " + name);
}

sayName();
sayName('Robert');

// debugger; opreste executia
// F8 revine la normal
// F10 sari peste un pas
// F11 intri intr-o executie

function removeFromNumbers(a, b) {
    if (a >=b) {
        return a - b;
    } else {
        return b - a;
    }
}

logStuff(removeFromNumbers(5,7));
logStuff(removeFromNumbers(5,4));
logStuff(removeFromNumbers(5,5));

function verifyNumber(number) {
    if (number > 10 && number < 50) {
        return `Da`;
    } else {
        return `Nu`;
    }
}

const verifyNumberArrow = () => {
    if (number > 10 && number < 50) {
        return `Da`;
    } else {
        return `Nu`;
    }
}

logStuff(verifyNumber(80));
logStuff(verifyNumber(30));

