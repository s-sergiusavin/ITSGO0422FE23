//acesta este o linie de cod comentat
/**
 * multi line comment
 * care nu va fi luat in considerare
 */

//primitives (primitive): number, string, boolean, undefined,symbol
//references (referinte): objects: arrays, functions 

/**
 * Variable types
 */

/**
 * var-nu se mai foloseste
 * let-variabila dinamica,i se poate schimba valoarea
 * const-variabila statica, nu i se schimba valoarea
 */

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
total = aNumber % bNumber;
console.log(total);


/**
 * string
 */

const fullName = "Denisia Damir";
const address = 'Iasi ,Romania';
console.log(fullName);
console.log(fullName.toUpperCase());

const zipcode = `500500`;
const age = 22;

//const age = "22";

const personalInfo = 
"Salut" +
fullName + "cu varsta de" + age + 'de ani'+
"Bine ai venit la curs!";
console.log(personalInfo);


const anotherIinfo = `
Acesta este 
un comment simplu
folosind backticks
am scris pe mai multe randuri ${fullName}` ;
console.log(anotherIinfo);
console.log(fullName);
console.log("my fullname is"+ fullName);
console.log(`my fullname is ${fullName}`);

/**
 * Booleaan
 */
 let lightsOn = false;
 lightsOn = true;

 /**
  * undefined type
  */
 let dogName;
 let catName = "Mitzy";
 let dogAge = 5;
 console.log(dogName + catName );
 console.log(dogName + dogAge);
 dogName = 'Bubico';


/**Referinte  */
 /**
  * Objects-colectii cu mai multe proprietati
  */

 const person = {
    fullName: 'Damir Denisia',
    age: 22,
    lovesCold: false,
    nationality: 'romanian',
    address: {
        city: 'Iasi',
        zipcode: 500500
    },
    'residence-permit': true

 };
 console.log(person);
 console.log(person.fullName);
 console.log(person.address.zipcode);
 console.log(person[`nationality`]);
 console.log(person ["residence-permit"]);

 const nat = "nationality";
 const nationality = 'Ameriican'
 console.log(person[nat]);

 /**
  * Array--liste-similare cu objects
  */

 const daysOffWeek = ['Monday', 'tuesday', 'wendsday', 4];
 console.log(daysOffWeek);
 console.log(daysOffWeek.length);
 console.log(daysOffWeek[1]);
 console.log(daysOffWeek[daysOffWeek.length -1]);

 console.log(daysOffWeek[2]);

