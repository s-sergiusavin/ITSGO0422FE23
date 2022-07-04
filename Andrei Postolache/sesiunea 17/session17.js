// Loops

let marksOf10Lei = 0;
marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei += 1; // cea mai folosita
marksOf10Lei++;
marksOf10Lei+3; // se adauga 3 la valoarea precendenta
++marksOf10Lei;

let total = 10;

// WHILE loop

while (marksOf10Lei < total) {
    marksOf10Lei = marksOf10Lei + 1;
}

console.log(`Avem ${marksOf10Lei} bancnote de 10 lei`);


let roomTemperature = 27;
let desiredTemperature = 21;

while (roomTemperature > desiredTemperature) {
    roomTemperature -= 1;
}

// Do while loop

//do {

// }   while (true);


// FOR loop

let marksOf5Lei = 0;
let totalOf5Lei = 5;


for (let index = 0; index < totalOf5Lei; index++)  {
    marksOf5Lei += 1;
}


let countries = ['Romania', 'Bulgaria', 'Ucraina', 'Turcia'];

for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);

}


// IF ELSE -- conditional structures / blocks


let var1 = 5;
let var2 = '5';

// == verifica valoarea
// === verifica valoarea si tipul variabilelor

if (var1 === var2) {
    console.log('Variabilele sunt egale');
}  else {
    console.log("Variabilele nu sunt egale");
}

if (var1 !== var2) {
    console.log('Variabilele nu sunt egale');
}  else {
    console.log("Variabilele sunt egale");
}

let temperature = 35;
let optimalTemperature = 21;

if (optimalTemperature < temperature) {
    console.log('Este placut afara');
} else {
    console.log('Este canicula afara');
}

// Logical operators

// && - daca cel putin o conditie este falsa, atunci totul este fals (si)
// || - daca cel putin o conditie este adevarata, totul este adevarat (sau)

let pizzaPrice = 40;
let hasGorgonzola = true;

if (pizzaPrice <= 30 || hasGorgonzola === true) {
    console.log('Pizza isi merita banii');
}  else {
    console.log('Pizza nu isi merita banii');
}


if (pizzaPrice <= 30 && hasGorgonzola === true) {
    console.log('Pizza isi merita banii');
}  else {
    console.log('Pizza nu isi merita banii');
}


// Functions

function logSomething() {
    console.log('Functia logSomething a fost apelata/invocata');    
}

logSomething();

let sum = 0;

function addToSum(number) {
    sum = sum + number;
    console.log('rezultatul este' + sum);
}

addToSum(3);

const removeFrom100 = function(number) {
    console.log(`Rezultatul este ${100 - number}`);
}

removeFrom100(20);

function sendEmail(firstName, lastName, proffesion, result, exam) {
    if (proffesion) {
        console.log('Ai profesia ' + proffesion);
    }
    console.log(`Salutare ${lastName} ${firstName},
    Ai obtinut nota ${result} la examenul ${exam}.
    Mult succes mai departe ${firstName}`);
}


sendEmail('sergiu', 'savin', 'doctor', 10, 'capacitate');

function logNumber(number = 10) {
    console.log(number);
}

logNumber(5);
logNumber();

function orderPizza (i1, i2, i3) {
    console.log(`As dori sa comand o pizza cu ${i1}, ${i2} si ${i3}`);
}

orderPizza('salt', 'bacon', 'pepper');


function doSum(a, b) {
        let s = a + b;
        console.log(`Suma este ${s}`);

        return a + b;
}

// doSum(5,7);

let sumResult = doSum(5, 7);
console.log(sumResult);
let pizzaOrdered = 0;
function doAnotherPizza(i1, i2, i3) {
    console.log(`Pizza cu ${i1}, ${i2}, ${i3} in preparare`);
    pizzaOrdered += 1;
    return pizzaOrdered;
}

let anounce = doAnotherPizza('ciuperci', 'ardei', 'prosciutto');
anounce = doAnotherPizza('ciuperci', 'ardei', 'prosciutto');
anounce = doAnotherPizza('ciuperci', 'ardei', 'prosciutto');
console.log(anounce);