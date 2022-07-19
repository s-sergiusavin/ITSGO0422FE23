/**
 * Array Methods
 */

let array = [1, 2, 3, '4', 5, 6 , 7];
//console.log(array.length);
//array[1]=100;
//console.log(array[4]);
//array[4] = 5;

//array[10] = 11;
//console.log(array);

//Adaugare sau stergere elemente intru-un array la final: push and pop
console.log(array.push(5));
//array.push(5);
console.log(array);
//array.pop();
console.log(array.pop());

console.log(array);


//Adaugare sau stergere elemente intru-un array la inceput: unshift & shift

array.unshift('zero');
console.log(array);

array.shift();
console.log(array);

/**
 * Array iterations
 */

// for (let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

//forEach method

//array.forEach(function () {});

// array.forEach( () => {});


// array.forEach(iterateArray);
// function iterateArray (element){
//     console.log(element);
// }


// array.forEach(function (element) {
//     console.log(element);
// });

// map method => create a new array

const newArray = array.map((element) => {
    return element + 1;
})
console.log(newArray);

// return the index of an array element

console.log(array.indexOf(3));
//array[2] = 7;
array[array.indexOf(3)] = 7;
console.log(array);


// Copy elements
let arrayCopy = array; // copiaza tot arrayul
console.log(arrayCopy);
arrayCopy[0]= 'zero';
console.log(array);
console.log(arrayCopy);

//Slice method

// arrayCopy = array.slice(2); copiaza toate elem unui array incepand cu o pozitie specificata
arrayCopy = array.slice(2, 5);// copiaza de la indexul specificat la cel de al doilea (nu e inclus)
console.log(arrayCopy);
console.log(array);

//  Cut elements 

// let changedArray = array.splice(2); // decupeaza elementele unui array incepand cu pozitia specificata 
let changedArray = array.splice(1, 2); // decupeaza elementele unui array specificand pozitia initiala si nr de elemente

console.log(changedArray);
console.log(array);

/**
 * Filtering array elements 
 * Returneaza un nou array cu valorie care indeplinesc conditia 
 * Nu modifica arrayul initial
 */



console.log(
    array.filter((element) => {
    return element > 3;
})
);

/**
 * Rreverse array
 * Mmodifica arrayul initial
 */

array.reverse();
console.log(array);

/**
 * Concat array (concatenare=imbinarea arrayurilor)
 */

const concatArray = ['add', 'me'];
console.log(array.concat(concatArray));

/**
 * Transform array into string 
 */

let arrayToString = array.join(' * ');
console.log(arrayToString);

/**
 * Reduce array 
 */

const reduceArray = [ 1, 2, 3, 4];
const reducedValue = reduceArray.reduce((total,value) => {  //(acc,val)=> accumulater, value
    return total * value;
});
console.log(reducedValue);


/**
 * Sorting an array 
 */

let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, 'asd', 'aac', 'sum'];
// const sortedArray= arrayToSort.sort(); by default nu sorteaza crescator numeric
const sortedArray= arrayToSort.sort((a,b)=>{
    return a -b ;
    //return b -a; pt sortare descrescatoare
});
console.log(sortedArray);

/**
 * Find element 
 */
const arrayToFind = [
    { name:'Lucian', city:'Beijing'},
    { name:'Andrei', city:'Hong Kong '},
    { name:'Denisia', city:'New York '},
    { name:'Andrei', city:'Hong Kong '},
    { name:'Denisia', city:'Taipei '},
]
const foundElem = sortedArray.find((element)=>{
    return element === 1024;
});
console.log(foundElem);


// const foundName = arrayToFind.find((element)=>{
//     return element.name === 'Denisia';
// });
// console.log(foundName);



// Daca avem un sg parametru ,parantezele rotunde sunt optionale
// Daca se scrie codul pe un singur rand si este o singura expresie, parantezele acolade sunt optionale, IAR RETURNUL ESTE IMPLICIT 
 const foundName = arrayToFind.find(element => element.name === 'Denisia');
 console.log(foundName);

 // Includes 

 let includedElem = sortedArray.includes(2001);
 console.log(includedElem);


 //          Objects 

 const createPerson = (name, age, gender) =>{
    return {
        firstName: name,
        age: age, // age era suficient 
        gender, // gender: gender
    }
 }

 const denisia = createPerson('Denisia', 20, 'female')
 const dragos = createPerson('Dragos', 25, 'male');
 console.log(denisia);


 /**
  * Create objects using OBJECT LITERAL method
  */
const lastName = 'George';
 const person = {
    name: 'Denisia',
    lastName: 'Damir',
    age: 22,
    adress: {
        street:'street',
        country: 'Ro'
    },
    sayHi : function (){
        console.log(`${this.lastName} says hi`);
    },

    sayHiArrow: () => {
        console.log(`${this.lastName} says hi`);// in cazul arraw function this nu functioneaza ete diferit 

    }
 }
 person.name = 'Andrei';
 person.sayHi();
person.sayHiArrow();

const otherPerson = new Object (person);
otherPerson.name = "Denisiad";
console.log(person);
console.log(otherPerson);


const bicycle = {
    gear: 21,
    setGear: function(gear){
        return this.gear = gear;
    },
    setGear (gear) {
        this.gear = gear;
    }

}

bicycle.gear = 14;
console.log(bicycle);

bicycle.setGear(30);
console.log(bicycle);


/**
 * Classes
 */

class Book {
    constructor (type, writer){
        this.type = type;
        this.writer = writer;

    }
}

const basme = new Book('basme', 'Petre ispirescu');
const povesti = new Book('povesti', 'Ion Creanga');

console.log(basme);
console.log(povesti);

basme.writer = 'Fratii Grimm';
console.log(basme);
console.log(povesti);


basme.year = '1991';
console.log(basme);
console.log(povesti);
