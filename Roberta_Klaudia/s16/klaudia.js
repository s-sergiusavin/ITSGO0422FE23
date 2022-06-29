// Aceasta este o linie de cod comentat

/**
 * hfb vasf
 * afb
 * sdjchbw
 * 
 * Mai multe linii de cod comentate, care nu vor fi luate in considerare
 */

// Primitives(primitive): number, string, boolean, undefined, symbol --->

// References(referinte): objects (arrays, functions) ---> harta catre o comoara; -NU stocheaza informatia

/**
 * Variable types
 * 
 * var - NU se mai foloseste :)))
 * let - variabila dinamica (i se poate schimba valoarea)
 * const - variabila statica (NU i se schimba valoarea)
 */

/**
 * Numbers (variabile)
 */

let monthlyPayCheck = 3000;
console.log(monthlyPayCheck);
monthlyPayCheck = 5000;
console.log(monthlyPayCheck);

const dailyPayCheck = 150; // valori numerice intregi sau fractionare, dar doar cu '.5'
// dailyPayCheck = 200;
console.log(dailyPayCheck);

let aNumber = 10;
let biNumber = 5;
let total;

total = aNumber + biNumber;
console.log(total);
total = aNumber - biNumber;
total = aNumber * biNumber;
total = aNumber / biNumber;
total = aNumber % biNumber;
console.log(total);

/**
 * String (insiruire de caractere)
 */

const fullName = "Roberta-Claudia\" Anton' 5$";
const address = 'Brasov", Rom\'ania';
console.log(fullName);
console.log(fullName.toUpperCase());
const zipcode = `500'50"0`;
const age = 21; // ---> caracter de number
// const age = '21'; ---> string corect

const personalInfo = 
"hey there" +
fullName +
"cu varsta de" +
age +
"de ani\n" + // \n e folosit pt a adauga o linie noua
"Bine ai venit, prost ai nimerit :))))";
console.log(personalInfo);

const anotherInfo = `
Acesta este
un comment
folosind backticks
am scris pe mai multe randuri ${fullName}`;
console.log(anotherInfo);

console.log('My fuulName is'   + fullName);
console.log('My fullName is'   ${fullName});