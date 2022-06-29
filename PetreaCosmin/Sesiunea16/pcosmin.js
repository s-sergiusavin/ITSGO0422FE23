//acesta este o linie de cod comentant
/**
 * acesta
 * este
 * cod
 * comentat
 * pe
 * mai
 * multe
 * linii
 */
// Primitives(primitive); number,string,boolean,undifenid,symbol
// References(referinte);
/**
 * Variable types
 */
// var-nu se mai foloseste
// let-variabila dinamica,i se poate schimba valoarea
// const-variabila statica nu i se schimba valoarea

/**
 * Numbers :
 */
let monthlyPaycheck = 3000;
console.log(monthlyPaycheck);

monthlyPaycheck = 5000;
console.log(monthlyPaycheck);

const dailyPaycheck = 150;
console.log(dailyPaycheck);

let aNumber = 10;
let bNumber = 5;
let sum;

sum = aNumber + bNumber;
sum = aNumber - bNumber;
sum = aNumber * bNumber;
sum = aNumber / bNumber;
sum = aNumber % bNumber;
console.log(sum);

/**
 * string
 */

const fullName = "Petrea Cosmin";
const address = "iasi,Romania";
console.log(fullName);
console.log(fullName.toUpperCase());
const zipcode = `50'05"00`;
const age = 30;

const personalInfo =
  "Salut " +
  fullName +
  " cu varsta de " +
  age +
  " de ani \n" + // \n e folosit pt a adauga o linie noua
  "Bine ai venit la curs!";
console.log(personalInfo);

const anotherInfo = `
Acesta este un coment
 simplu folosind backticks
am scris pe mai multe randuri ${fullName}`;
console.log(anotherInfo);
