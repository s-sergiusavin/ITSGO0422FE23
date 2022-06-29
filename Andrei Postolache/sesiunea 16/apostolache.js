// Primitives(primitive): number, string, boolean, undefined, symbol
// References(referinte): arrays, objects, functions

/**
 * Numbers
 */

/**Variable types */

//var - nu se mai foloseste



// let - variabila dinamica, i se poate schimba valoarea
// const - variabila statica, nu i se schimba valoarea

let monthlyPaycheck = 3000;
monthlyPaycheck = 5000;

const dailyPaycheck = 150;


let aNumber = 10;
let bNumber = 5;
let total;

total = aNumber + bNumber;
total = aNumber - bNumber;
total = aNumber * bNumber;
total = aNumber / bNumber;
total = aNumber % bNumber;
console.log(total);

/**
 * String
 */

const fullName = "Andrei";
console.log(fullName);
const zipcode = `505050`;
const age = 30;

const personalInfo = 
"Salut" +
fullName + "cu varsta de " + age + "de ani" +
"Bine ai venit la curs!";
console.log(personalInfo);


const anotherInfo = `
Acesta este un comment simplu folosind backticks 
am scris pe mai multe randuri`;
console.log(anotherInfo);

/**
 * Boolean
 */

let lightsOn = false;
lightsOn = true;


/**
 * Undefined
 * 
 */

let dogName;
console.log(dogName);


/**
 * Objects
 */

const person = {
    fullName: 'Andrei Postolache',
    age:30,
    lovesCold: false,
    nationality: 'Romanian',
    address: {
        city:'Iasi',
        zipcode: 500500
    },
    'residence.permit': true
};
console.log(person);
console.log(person.fullName);
console.log(person['nationality']);


/**
 * Array
 */

const daysOfWeek = ['Monday', 'Tuesday', 'Wendsday', 4];
console.log(daysOfWeek.length);
const i = daysOfWeek.length;

console.log(daysOfWeek[1]);
console.log(daysOfWeek[daysOfWeek.length - 1]);
console.log(daysOfWeek[i - 1]);