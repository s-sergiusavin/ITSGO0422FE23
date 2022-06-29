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
const zipcode = `335'8"00`;         //` se numesc backticks
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

/**
 * Boolean
 */

let lightsOn = false;
lightsOn = true;

/**
 * Undefined type
 */

let dogName;
let catName = 'Mitzy';
let dogAge = 5;
console.log(dogName + catName);
console.log(dogName + dogAge);
dogName = 'Bubico';

/**
 * Objects
 */

const person = {
    fullName: 'Lucian Oltean',
    age: 30,
    lovesCold: false,
    nationality: 'Romanian',
    address: {
        city: 'Hunedoara',
        zipcode: 335800
    },
    'residence-permit': true,
};
console.log(person);
console.log(person.fullName);
console.log(person.address.zipcode);
console.log(person["residence-permit"]);

const nat = "nationality";
const nationality = 'American';
console.log(person[nat]);

/**
 * Array
 */

const daysOfWeek = ['Monday', 'Tuesday', 'Wensday', 4];
console.log(daysOfWeek);
console.log(daysOfWeek.length);
console.log(daysOfWeek[1]);

// Toate cele 3 expresii de mai jos inseamna acelasi lucru
const i = daysOfWeek.length;
const index = daysOfWeek.lengthl
console.log (daysOfWeek[i-1]);
console.log(daysOfWeek[index - 1]);
console.log(daysOfWeek[daysOfWeek.length - 1]);
console.log(daysOfWeek[daysOfWeek.length -1]);   //pozitia in care se afla un element intr-o lista, poarta denumire de INDEX
console.log(daysOfWeek[daysOfWeek.length - 2]);

