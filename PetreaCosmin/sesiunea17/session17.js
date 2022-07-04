//Primitives:number,string,boolean,undefined,symbol
//References:objects,array,functions,null

//Numbers

let myNumber = 5;
let secondNumber = 2;
let result;
// ** RIdicare la putere

//Loops
let marksOf10Lei = 0;
marksOf10Lei = marksOf10Lei + 1;

marksOf10Lei += 1;
marksOf10Lei++;
marksOf10Lei + 3; // se adauga 3 la valoarea precedenta
++marksOf10Lei;

let total = 10;
// while loop

while (marksOf10Lei < total) {
  marksOf10Lei = marksOf10Lei + 1;
}

console.log(`Avem ${marksOf10Lei} bancnote de 10 lei`);

let roomTemperature = 27;
let desiredTemperature = 21;

while (roomTemperature > desiredTemperature) {
  roomTemperature -= 1;
}

console.log(`temperatura ideala este de ${roomTemperature}`);

//For Loop
let marksOf5Lei = 0;
let totalof5lei = 5;
for (let i = 0; i < totalof5lei; i++) {
  marksOf5Lei += 1;
}
console.log(`avem un total de ${marksOf5Lei} bancnote de 5 lei`);

let countries = ["Romania", "bulgaria", "japonia", "irlanda"];
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}
// if else --conditional structures/Blocks

let var1 = 5;
let var2 = "5";
// == Verifica valoarea;
// === Verifica valoarea si tipul variabilelor;
if (var1 === var2) {
  console.log("Variabilele sunt egale");
} else {
  console.log("Variabilele nu sunt egale");
}

if (var1 !== var2) {
  console.log("Variabilele sunt egale");
} else {
  console.log("Variabilele nu sunt egale");
}

let temperature = -35;
let optimalTemperature = 21;

if (optimalTemperature < temperature) {
  console.log("Este placut afara");
} else {
  console.log("Este canicula");
}

//Logical operators

//&& -daca cel putin o conditie este falsa atunci totul este fals
// ||-daca cel putin o conditie este adevarata atunci totul este adevarat

let pizzaPrice = 40;
let hasGorgonzola = true;

if (pizzaPrice <= 30 || hasGorgonzola === true) {
  console.log("pizza is merita banii");
} else {
  console.log("pizza nu isi merita banii");
}

if (pizzaPrice <= 30 && hasGorgonzola === true) {
  console.log("pizza is merita banii");
} else {
  console.log("pizza nu isi merita banii");
}

//Functions

function logSomething() {
  console.log("Functia logSomething()a fost apelata"); //to call a function
}

logSomething();
let sum = 0;

function addToSum(number) {
  sum = sum + number;
  console.log(`Rezultatul este ${sum}`);
}
addToSum(3);
addToSum(5);

const removeFrom100 = function (number) {
  console.log(`Rezultatul este ${100 - number}`);
};
removeFrom100(20);

function sendEmail(firstname, lastName, proffesion, result, exam) {
  if (proffesion) {
    console.log("Ai profesia" + proffesion);
  }
  console.log(`Salutare ${lastName} ${firstname},
    Ai obtinut nota ${result} la examenul ${exam}.
    Mult succes mai departe ${firstname}`);
}

sendEmail("Cosmin", "Petrea", "fotbalist", 10, "Introducere In Automatica");
sendEmail("Cosmin", "Petrea", "fotbalist", 10, "Introducere In Automatica");

function logNumber(number = 10) {
  console.log(number);
}
logNumber(5);
logNumber();

function getTemperature(temperaturadeafara) {
  console.log(
    `temperatura exterioara este de ${temperaturadeafara} de grade celsius.`
  );
}

getTemperature(25);

function orderApizza(ingredient1, ingredient2, ingredient3) {
  console.log(
    `Doresc sa comand o pizza cu ${ingredient1} , ${ingredient2} , ${ingredient3}`
  );
}

orderApizza("Salam", "Mozzarela", "ananas");
orderApizza("pastrama", "telemea", "ardei");

function makeTheSum(number1, number2) {
  return number1 + number2;
  console.log("Suma este:", number1 + number2);
}
// makeTheSum(5, 2);

letSumresult = makeTheSum(5, 2);
console.log(letSumresult);

let pizzaOrdered = 0;

function doAnotherPizza(i1, i2, i3) {
  console.log(`vreau o pizza cu ${i1} , ${i2} , ${i3}`);
  pizzaOrdered += 1;
  return "Pizza a fost comandata";
}
let anounce = doAnotherPizza("Salam", "Mozzarela", "ananas");
anounce = doAnotherPizza("Salam", "Mozzarela", "ananas");
anounce = doAnotherPizza("Salam", "Mozzarela", "ananas");
anounce = doAnotherPizza("Salam", "Mozzarela", "ananas");
console.log(anounce);
console.log(pizzaOrdered);
