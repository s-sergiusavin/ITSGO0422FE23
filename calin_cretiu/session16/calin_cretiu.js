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

/**
 *
 *
 *                                 Booleans
 */

let lightsOn = true;
lightsOn = false;

/**
 *
 *                                   Undefined
 *
 */

let dogName;
console.log(dogName);

/**
 *
 *                      Object
 *
 *
 */

const person = {
  fullName: "Calin Cretiu",
  age: 41,
  lovesCold: false,
  nationality: "Romanian",
  address: {
    city: "Timisoara",
    zipcode: 300350,
  },
  "residence-permit": true,
};

console.log(person);
console.log("Full name: ", person.fullName);
console.log("Address: ", person.address);
console.log("City: ", person.address.city);
console.log(person.nationality);
console.log(person["nationality"]);
console.log(person["residence-permit"]);
