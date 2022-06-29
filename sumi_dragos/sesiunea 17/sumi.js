
/**
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