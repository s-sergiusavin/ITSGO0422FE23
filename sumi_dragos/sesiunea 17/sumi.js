
/**
 *
 * variabile
 * 
 * var - nu se mai foloseste
 * let - variabila dinamica i se poate schimba valaorea
 * const - variabila statica, nu i se schimba valoarea
 */



/**
 * Numbers
 */


let monthlyPaycheck = 3000;
monthlyPaycheck = 5000;

const dailyPaycheck = 150;
console.log(monthlyPaycheck);


let aNumber = 10;
let bNumber = 5;
let total;


total = aNumber + bNumber ;
console.log(total);
total = aNumber - bNumber ;
total = aNumber * bNumber ; 
total = aNumber / bNumber ;
total = aNumber % bNumber ; 
console.log(total);



/**
 * String
 */


const fullName = "Sumila Ionut Dragos";
const address =  "Chilia Veche, Tulcea";
console.log(fullName);
console.log(fullName.toUpperCase());
const zipcode = `827050`;
const age = 22;

const personalInfo = 
"salut" +
fullName + "cu varsta de" + age + "de ani\n" + //\n e folosit pt a adauga linie noua 
"Bine ai venit la curs!";
console.log(personalInfo);


const anotherInfo = `
Acesta este un comm simplu
folosind backticks
am scris pe mai multe
randuri ${fullName}`
console.log(anotherInfo)


console.log(fullName);
console.log('My full name is ' + fullName);
console.log("My full name is " + fullName);


/**
 * Boolean
 */

let lightsOn = false;
lightsOn = true;


/**
 * Undefined type
 */

let dogName;
let catName = `Pisu`;
let dogAge = 5 ;
console.log(dogName + catName);
console.log(dogName + dogAge);
dogName = `Bella`;


/**
 * Objects
 */


const person = {
    fullName: `Sumila Dragos`,
    age: `22`,
    lovesCold: false,
    nationality:`Romanian`,
    address: {
        city:`Tulcea`,
        zipcode:`827050`
    },
    "residence-permit":true
};
console.log(person);
console.log(person.fullName);
console.log(person.address.zipcode);
console.log(person[`nationality`]);
console.log(person["residence-permit"]);

const nat = `nationality`;
const nationality = `American`;
console.log(person[nat])


/**
 * Array
 * 
 * SUB TIPURI DE OBIECTE (REFERINTA)
 * LISTE
 * VALORILE LE PUTEM ACCESA IN FUNCTIE DE POZITIA LOR 
 */


const daysOffWeek = [`Monday`,`Tuesday`,`wendsday`,`4`];
console.log(daysOffWeek);
console.log(daysOffWeek.length);
console.log(daysOffWeek[1]);
console.log(daysOffWeek[daysOffWeek.length -1]);