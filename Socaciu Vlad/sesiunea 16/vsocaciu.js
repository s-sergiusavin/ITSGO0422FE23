const fullName = "socaciu vlad";
const age = 30;

const personalInfo = 
"salut " +
fullName + " cu varsta de " + age + " de ani \n" // \n e folosit pt a adauga o linie noua
+" bine ai venit la curs!";
console.log(personalInfo);

const anotherInfo = `
acesta e un comm simplu
folosind backticks
scris pe mai multe randuri ${fullName}`;
console.log(anotherInfo);

console.log(fullName);
console.log('my fullName is ' + fullName);
console.log(`my fullName is ${fullName}`);

/**
 * Boolean
 */

let lightsON = false;
lightsON = true;

/**
 * Undefined type
 */

let dogName;
let catName = "Mitzy"
let dogAge = 5
console.log(dogName);
console.log(dogName + catName);
console.log(dogName + dogAge);
dogName = 'Bubico';

/**
 * Objects
 */

const person = {
    fullName: 'Vlad Socaciu',
    age: 24,
    lovesCold: false,
    nationality: 'Romanian',
    address: {
        city: 'Cluj',
        zipcode: 500500
    },
    'residence-permit': true
};

console.log(person);
console.log(person.fullName);
console.log(person.address.zipcode);
console.log(person["residence-permit"]);

const nat = 'nationality';
const nationality = 'American'
console.log(person[nat]);

/**
 * Array
 */

const daysOfWeek = ['monday', 'tuesday', 'wendsday', 4];
console.log(daysOfWeek);
console.log(daysOfWeek.length);
console.log(daysOfWeek[daysOfWeek.length - 1]);
console.log(daysOfWeek[2]);