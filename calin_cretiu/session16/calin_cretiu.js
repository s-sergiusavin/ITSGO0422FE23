/**
 *
 *                          Numbers
 *
 */

let aNumber = 10;
let bNumber = 5;
let total;
total = aNumber + bNumber;
total = aNumber - bNumber;
total = aNumber / bNumber;
total = aNumber * bNumber;
//                           MODULO: \/
total = aNumber % bNumber;
console.log(total);

/**
 *                           Strings
 *
 */

const fullName = "Calin Cretiu";
const address = "'Timisoara', Romania";
console.log(fullName.toUpperCase());
//console.log(fullName);
const zipcode = `500550`;
const age = 30;
const personalInfo =
  "salt\n " + fullName + " cu varsta de " + age + " \nBine ai venit la curs";
console.log(personalInfo);

const anotherInfo = `
Acesta este un comment simplu 
folosind backticks
pe mai multe randuri, ${fullName}`;
console.log(anotherInfo);
console.log(fullName);
