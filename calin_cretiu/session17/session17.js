//Primitives: number, string, boolean, undefined, symbol

//References: objects, arrays, functions, null

//Loops
//      while
let marksOf10Lei = 0;
let total = 10;
while (marksOf10Lei < total) {
  marksOf10Lei += 1;
}
console.log(`avem ${marksOf10Lei} bancnote de 10 lei`);

//      do while
// do {} while (true);

//      for
let marksOf5Lei = 0;
let totalOf5Lei = 5;

for (let index = 0; index < totalOf5Lei; index++) {
  marksOf5Lei++;
  console.log(marksOf5Lei);
}

// if else (conditional blocks)
let temperature = 35;
let optimalTemperature = 21;

if (optimalTemperature < temperature) {
  console.log(
    "temperatura optima este mai mica decat cea masurata / cea masurata este mai mare"
  );
} else {
  console.log("temperatura optima este mai mare decat temperatura");
}

// Logical operators

// && daca ambele conditii sunt true, rezultatul este true

// ||  -sau- daca cel putin o conditie este adevarata, rezultatul este true

let pizzaPrice = 40;
let hasGorgonzola = true;

if (pizzaPrice <= 30 || hasGorgonzola === true) {
  console.log("Pizza isi merita banii");
} else {
  console.log("pizza nu isi merita banii");
}

// Functions

function logSomething() {
  console.log("Functia logSomething() a fost apelata / invocata");
}

logSomething();

let sum = 0;
function addToSum(number) {
  sum += number;
  console.log("Rezultatul este ", sum);
}

addToSum(3);
addToSum(5);

const removeFrom100 = function (number) {
  console.log("rezultatul este ", 100 - number);
};
removeFrom100(20);

function sendEmail(firstName, lastName, profession, result, exam) {
  if (profession) {
    console.log("Ai profesia ", profession);
  }
  console.log(`Salutare ${lastName} ${firstName},
  Ai obtinut nota ${result} la examenul ${exam}.
  Mult succes mai departe ${firstName}`);
}

sendEmail("Calin", "Cretiu", "sho-mer", 10, "capacitate");
sendEmail("Calin", "", "sho-mer", 10, "capacitate");

function logNumber(number = 10) {
  console.log(number);
}

logNumber(5);
logNumber();

function afiseazaTemperaturaAfara(temperatura) {
  console.log("temperatura exterioara este ", temperatura);
}

afiseazaTemperaturaAfara(46);

function comandaOPizza(i1, i2, i3) {
  console.log("As dori sa comand o pizza cu ", i1, " ", i2, " ", i3);
}

comandaOPizza("salam", "ardei iutem", "ananasu");
comandaOPizza("icre", "pateu", "toba");

function doSum(n1, n2) {
  console.log("Suma este ", n1 + n2);
}

doSum(5, 4);

let sumResult = doSum(5, 5);
console.log(sumResult); //nu returneaza nimic functia, deci undefined
let pizzaOrdered = 0;

function doAnotherPizza(i1, i2, i3) {
  pizzaOrdered++;
  return pizzaOrdered;
}

let anounce = doAnotherPizza("ciuperci", "ardeu", "porsciutto");
anounce = doAnotherPizza("ciuperci", "ardeu", "porsciutto");

console.log(pizzaOrdered);
