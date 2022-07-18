/**
 *  Array Methods
 */

let array = [1, 2, 3, 'four', 5, 6, 7];
// console.log(array.length);
// array[1] = 100;
// console.log(array);
// console.log(array[4]);
// array[4] = 5;
// console.log(array[4]);
// array[10] = 11;
// console.log(array);

// Adaugare sau stergere elemente intr-un array la final

// array.push(5);
console.log(array.push(5));
console.log(array);
// array.pop();
console.log(array.pop());
console.log(array);

// Adaugare sau stergere elemente intr-un array la inceput: unshift 

array.unshift('zero');
console.log(array);
array.shift();
console.log(array);

/**
 * Array iteration
 */


for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// forEach method
// array.forEach(function () {});

// array.forEach( () => {});

array.forEach(function (element) {
    console.log(element);
});

// array.forEach(iterateArray);
// function iterateArray(element) {
//     console.log(element);
// }

// Map method => create a new array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const newArray = array.map((element) => {
    return element;
});
console.log(newArray);

// Return the index of an array element

console.log(array.indexOf(3));
// array[2] = 7;
array[array.indexOf(3)] = 7;
console.log(array);

// Copy elements

let arrayCopy = array; // copiaza tot arrayul
console.log(arrayCopy);
arrayCopy[0] = 'zero';
console.log(array);
console.log(arrayCopy);

//Slice method - copiere; nu modifica elementul initial

arrayCopy = array.slice(2); // copiaza toate elementele unui array incepand cu o pozitie specificata
console.log(arrayCopy);
arrayCopy = array.slice(2, 5); // copiaza de la indexul specificat pana la cel de-al doilea (nu e inclus)
console.log(arrayCopy);
console.log(array);

console.log('-------------------------------');

// Cut elements


// let changedArray = array.splice(2);

let changedArray = array.splice(1, 2); // decupeaza elementele unui array, specificand pozitia initiala si numarul de elemente

console.log(changedArray);
console.log(array);

/**
 * Filtering array elements
 * Returneaza un nou array cu val care indeplinesc conditia
 * Nu modifica arrayul initial
 */

array.filter((element) => {
    return element > 3;
});

console.log(
    array.filter((element) => {
        return element > 3;
    })
);
console.log('-------------------------------');
/**
 * Reverse array
 * Modifica arrayul initial
 */

array.reverse();
console.log(array);

/**
 * Concat array (concatenare = imbinarea array-urilor)
 */

const concatArray = ['add', 'me'];
console.log(array.concat(concatArray));

// const array2 = [1,2];
// array2[0]='test';
// array2[2]=3;
// console.log(array2);

/**
 * Transform array into string
 */

let arrayToString = array.join(' * ');
console.log(arrayToString);

/**
 * Reduce array - use usually for numbers
 */

const reduceArray = [1, 2, 3, 4];
const reducedValue = reduceArray.reduce((total, value) => { // (acc,val) => {} accumulator, value
    return total + value;
});

console.log(reducedValue);

/**
 * Sorting an array 
 */

let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, 'asd', 'aac', 'sum'];
// const sortedArray = arrayToSort.sort(); // sortare alfa-numerica
const sortedArray = arrayToSort.sort((a, b) => {
    return a - b;
    // return b-a pt sordare descrescatoare;
});
console.log(sortedArray);

/**
 * Find element
 */

const arrayToFind = [
    { name: 'Lucian', city: 'Beijing' },
    { name: 'Andrei', city: 'New York' },
    { name: 'Sergiu', city: 'Beijing' },
    { name: 'Moldovan', city: 'Beijing' },
    { name: 'Sergiu', city: 'Test' },
];


const foudElem = sortedArray.find((element) => {
    return element === 200;
});
console.log(foudElem);

// const foundName = arrayToFind.find((element) => {
//     return element.name === 'Sergiu';
// });
// console.log(foundName);

//Daca avem un singur param, parantezele rotunde sunt potionale
//Daca se scrie codul pe un singur rand si este o singura expresie, parantezele acolade sunt optionale, IAR RETURNUL ESTE IMPLICIT
const foundName = arrayToFind.find(element => element.name === 'Sergiu');

//  Includes

let includedElem = sortedArray.includes(200);
console.log(includedElem);
console.log('-----------------');
/**
 * OBJECTS 
 */

const createPerson = (name, age, gender) => {
    return {
        firstName: name,
        age: age, // age era suficient -> daca valoarea e la fel ca proprietatea putem folosi doar una
        gender, // gender: gender
    }
}

const sergiu = createPerson('Sergiu', 18, 'male');
const dragos = createPerson('Dragos', 23, 'male');
console.log(sergiu);

/**
 * Create objects using OBJECT LITERAL method
 */


const lastName = 'George';
const person = {
    name: 'Sergiu',
    lastName: 'Savin',
    age: 30,
    address: {
        street: 'street',
        country: 'Ro'
    },
    sayHi: function () {
        console.log(`${this.lastName} says hi`);// this - la functie normala = contextul
    },
    sayHiArrow: () => {
        console.log(`${this.lastName} says hi`);// in cazul arrow function this este diferit
    }
};

person.name = 'Andrei';
person.sayHi();
person.sayHiArrow();

const otherPerson = new Object(person); // daca modificam o valoare se modifica in ambele parti
otherPerson.name = 'SergiuS';

console.log(person);
console.log(otherPerson);

const bicycle = {
    gear: 21,

    setgear: function (gear) {
        this.gear = gear;

    },
    setGear(gear) {
        this.gear = gear;
    }
};

// bicycle.gear = 30;
bicycle.setGear(30);

console.log(bicycle);

/**
 * Classes
 */
// Sunt folosite pe Angular, pe React se lucreaza cu functii !!
// Nici pe Vue - nu se folosesc.
class Book {
    constructor(type, writer) {
        this.type = type;
        this.writer = writer;
    }
}

const basme = new Book('basme', 'Petre Ispirescu');
const povesti = new Book('povesti', 'Ion Creanga');

console.log(basme);
console.log(povesti);

basme.writer = 'Fratii Grimm';
console.log(basme);
console.log(povesti);

basme.year = '1991';
console.log(basme);
console.log(povesti);

