// Primitives: number, string, boolean, undefined, symbol
// References: object: objects, array, functions, null

// Numbers

let  myNumber = 5;
let secondNumber = 2;
let result;
result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber * secondNumber;
result = myNumber / secondNumber;
result = myNumber % secondNumber;
//  ** ridicare la putere

// Strings

let myString = "Acesta este un mesaj" + result + "2 + 2";
myString = "O'heary";
myString = '';
myString = `Acesta este un mesaj${result}2 + 2 ${3 + 3}`;

//  Bolleans

let lightsOn = false;

// Arrays

const myArray = [5, 'test', true, [3, '53'], undefined, null, {name: 'sergiu'}];
console.log(myArray[3][1]);
console.log(myArray[6].name);

// Objects

const myObject = {
    burger: 'Big Mac',
    juice: 'Cola',
    'french fries': 'With fries',
    address: {
        street: 'Street',
        number: 1
    },
    souce: ['Ketchup', 'Mayo'],  
};

// Loops

let marksOf10Lei = 0;
marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei += 1;
marksOf10Lei++;
marksOf10Lei+3; // se adauga 3 la valoarea precedenta
++marksOf10Lei;

let total = 10;

marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei = marksOf10Lei + 1;

// While loop

while (marksOf10Lei < total) {
    marksOf10Lei = marksOf10Lei + 1;
}

console.log(`Avem ${marksOf10Lei} bancnote de 10 lei`);

let roomTemperature = 27;
let desiredTemperature = 21;

while (roomTemperature > desiredTemperature) {
    roomTemperature -= 1;
}

let acIsOn = false;

while (!acIsOn) {
// while (acIsOn !== true) {    
    roomTemperature += 1;
    if (roomTemperature === 35) {
        acIsOn = true;
    }
}

// Do while loop

// do {

// } while (true);

// For loop

let marksOf5Lei = 0;
let totalOf5Lei = 5;


// For condition: initializare, conditie, actiune la finalul fiecarei iteratii
for (let index = 0; index < totalOf5Lei; index++) {
    marksOf5Lei += 1;
}

let countries = ['Romania', 'Bulgaria', 'Ucraina', 'Turcia'];

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}

// If else -- conditional structures / blocks

let var1 = 5;
let var2 = '5';

// == verifica valoarea
// === verifica valoarea si tipul variabilelor

if (var1 === var2) {
    console.log('Variabilele sunt egale');
} else {
    console.log("Variabilele nu sunt egale");
}

if (var1 !== var2) {
  console.log("Variabilele nu sunt egale");
} else {
  console.log("Variabilele sunt egale");
}

let tempperature = 35;
let optimalTemperature = 21;

if (optimalTemperature < tempperature) {
    console.log('Este placut afara');
} else {
    console.log('Este canicula afara');
}

// !!! A nu se folosi intr-o bucla o conditie mereu adevarat

// while (optimalTemperature < tempperature) {
//     tempperature += 1;
// }

// Logical operators

// && - daca cel putin o conditie este false, totul este fals
// || - daca cel putin o conditie este adevarata, totul este adevarat

let pizzaPrice = 40;
let hasGorgonzola = true;

if (pizzaPrice <= 30 || hasGorgonzola === true) {
    console.log('Pizza isi merita banii');
} else {
     console.log("Pizza nu isi merita banii");
}

if (pizzaPrice <= 30 && hasGorgonzola === true) {
  console.log("Pizza isi merita banii");
} else {
  console.log("Pizza nu isi merita banii");
}

//  Functions

function logSomething() {
    console.log('Functia logSomething() a fost apelata/invocata'); // to call a function
}

logSomething();
// logSomething();
// logSomething();
// logSomething();



function addToSum(number) {
    let sum = 0;
    sum = sum + number;
    console.log('Rezultatul este ' + sum);
}

addToSum(3);
addToSum(5);

const removeFrom100 = function(number) {
    console.log(`Rezultatul este ${100 - number}`);
}

removeFrom100(20);
removeFrom100('Marcel');

function sendEmail(firstName, lastName, proffesion, result, exam) {
    if (proffesion) {
        console.log('Ai profesia ' + proffesion);
    }
    console.log(`Salutare ${lastName} ${firstName},
    Ai obtinut nota ${result} la examenul ${exam}.
    Mult succes mai departe ${firstName}`);
}

sendEmail('sergiu', 'savin', 'doctor', 10, 'capacitate');
sendEmail("sergiu", 'savin', "", 10, "capacitate");

function logNumber(number = 10) {
    console.log(number);
}

logNumber(5);
logNumber();

function logWeather(temperature) {
    console.log('Temperatura exterioara este ' + temperature);
}

logWeather(28);

function orderPizza(i1, i2, i3) {
    console.log(`As dori sa comand o pizza cu ${i1}, ${i2}, ${i3}`);
}

orderPizza('pomodoro', 'mozzarela', 'prosciutto');
orderPizza("ciuperci", "ardei", "prosciutto");

function doSum(a, b) {
    console.log('Suma este: ' + (a + b));
    return a + b;
     console.log("Acest cod nu va fi luat in considerare");
}

// doSum(5,7);

let sumResult = doSum(5, 7);
console.log(sumResult);
let pizzaOrdered = 0;
function doAnotherPizza(i1, i2, i3) {
    console.log('Pizza cu ' + i1 + i2 + ' ' +i3 + ' in preparare');
    pizzaOrdered += 1;
    return pizzaOrdered;
}

let anounce = doAnotherPizza("ciuperci", "ardei", "prosciutto");
anounce = doAnotherPizza("ciuperci", "ardei", "prosciutto");
anounce = doAnotherPizza("ciuperci", "ardei", "prosciutto");
console.log(anounce);