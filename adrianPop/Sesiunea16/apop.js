//  Acesta este un cod comentat

/**
 * Multi line comment 
 * 
 * dsa
 * c
 */

// Primitives(primitive) -> stocheaza valoarea : number, string, boolean, undefined, symbol
// References(referinte) -> referinta catre locul unde se afla informatia : objects: arrays, functions

/**Variable types
 * var - nu se foloseste
 * let - variabila dinamica, i se poate schimba valoarea
 * const - variabilka statica, nu i se schimba valoarea
 */


/**
 * Numbers
 */

let monthlyPaycheck = 3000;
console.log(monthlyPaycheck);
monthlyPaycheck = 5000;
console.log(monthlyPaycheck);

const dailyPaycheck = 150.5;
console.log(dailyPaycheck);

let aNumber = 10;
let bNumber = 5;
let total;

total = aNumber + bNumber;
console.log(total);
total = aNumber - bNumber;
total = aNumber * bNumber;
total = aNumber / bNumber;
total = aNumber % bNumber;
console.log(total);

/**
 * String
 */

const fullName = "Adrian' 2$";
const address = 'Timisoara, Roman\'ia';
console.log(fullName);
console.log(address);
const zipcode = `Nume: ${fullName}`;
console.log(zipcode);
const age = 30;

const personalInfo = 
'Salut' +
fullName + "cu varsta de " + age + " de ani" +
'Bine ai venit la curs!' ;
console.log(personalInfo);

const anotherInfo = `
Acesta este 
un comment simplu
folosind backticks
am scris pe mai multe randuri ${fullName}`;
console.log(anotherInfo);