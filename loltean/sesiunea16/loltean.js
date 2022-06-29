// Acesta este o linie de cod comentat

/**
 * 
 *Multi line comment 
 * care nu va fi luat in considerare
 * 
 * 
 * dsaf
 * dasdwe
 *adsasad
 */

 //Primitives(primitive): number, string, boolean, undefined, symbol
 //References(referinte): objects: arrays, functions

 /**
  * Variables types
  */
// var - nu se mai foloseste
// let - variabila dinamica, i se poate schimba valoarea
// const - variabila statica, nu i se schimba valoarea

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
total = aNumber % bNumber; //**modulo se numeste *
console.log(total);

/**
 * String
 */

const fullName = "Lucian Oltean 2$";
const address = 'Hunedoara, Roma\'nia';
console.log(fullName);
console.log(fullName.toUpperCase());
const zipcode = `335'8"00`;         //` se numesc backtips
const age = 30;
// const age ='30';

const personalInfo = 
"Salut" + //+ face concatenare - asa se numeste operatia
fullName + "cu varsta de " + age + " de ani\n" + //\n e folosit pentru a adauga o linie noua
"Bine ai venit la curs!"
console.log(personalInfo);

const anotherInfo = `
Acesta este
un comment simplu
folosind backticks
am scris pe mai multe randuri ${fullName}`;
console.log(anotherInfo);

console.log(fullName);
console.log('My fullName is '           + fullName);
console.log('My fullName is      ${fullName}');




