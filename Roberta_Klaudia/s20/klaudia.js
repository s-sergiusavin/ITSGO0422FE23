// Array Methods
let array = [1, 2, 3, 'four', 5, 6, 7];
console.log(array.length);
array[1] = 100;
console.log(array);
array[4] = 5;
console.log(array);
array[10] = 11;
console.log(array);

// adaugare sau stergere elemente intr-un/dintr-un array --- la final (push & pop)
array.push(5);
console.log(array);

array.pop();
console.log(array);

console.log(array.push(5));
console.log(array.pop());

// adaugare sau stergere elemente intr-un/dintr-un array --- la inceput (unshift & shift)
array.unshift('zero');
console.log(array);

array.shift();
console.log(array);



// Array iterations
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


/**  forEach Method  --->  array.forEach(function () {});
*                    --->  array.forEach( () => {});
*                    --->  array.forEach|(iterateArray);
*                          function iterateArray (element) {
*                             console.log(element);
*                          }
*/
array.forEach(function (element) {
    console.log(element);
});


// map Method ---> create a new array
const newArray = array.map( (element) => {
    return element + 1;
})
console.log(newArray);


// return the index of an array element
console.log(array.indexOf(3));
// array[2] = 7;
array[array.indexOf(3)] = 7;
console.log(array);


// copy elements  ---> copiaza tot array-ul
let arrayCopy = array;
console.log(arrayCopy);
arrayCopy[0] = 'zero';
console.log(array);
console.log(arrayCopy);


// slice Method  --->  
arrayCopy = 5;
console.log(arrayCopy);
console.log(array.slice(2));       // copiaza toate elem unui array incepand cu o pozitie specificata
console.log(array.slice(2,5));     // copiaza de la indexul specificat pana la cel de-al doilea (NU e specificat)


// cut elements
/**
* let changedArray = array.splice(2);
* // decupeaza elem unui array incepand cu pozitia specificata
*/
let changedArray = array.splice(1, 2);  // decupeaza elem unui array specificand pozitia initiala si nr de elem
console.log(changedArray);


/**  filtering array elem  ---> returneaza un nou array cu valorile care indeplinesc conditia
 *                         ---> NU modifica array-ul initial
*/
array.filter( (element) => {
    return element > 3;
});
console.log(
    array.filter( (element) => {
      return element > 3;
  })
);


// reverse array
array.reverse();
console.log(array);


// concat array (concatenare = imbinarea array-urilor)
const concatArray = ['add', 'no'];
console.log(array.concat(concatArray));


//transform array into string
let arrayToString = array.join(' ');
console.log(arrayToString); 


// reduce array
const reduceArray = [1, 2, 3, 4];
const reducedValue = reduceArray.reduce( (total, value) => {
    return total + value;
});
console.log(reducedValue);


// sorting an array
let arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, 'asd', 'aac', 'sum'];
// const sortedArray = arrayToSort.sort();    ---> NU sorteaza crescator numeric (by default)
const sortedArray = arrayToSort.sort( (a, b) => {
    return a - b;  // ---> pt sortare crescatoare
    // return b - a;  ---> pt sortare descrescatoare
});
console.log(sortedArray);


// find elem
const arrayToFind = [
    {name: 'Roberta', city: 'Seoul'},
    {name: 'Klaudia', city: 'Amsterdam'},
    {name: 'Johnny', city: 'Bucharest'},
    {name: 'Valentin', city: 'Frankfurt'},
    {name: 'Roberta', city: 'Rome'},
]
const foundName = arrayToFind.find( (element) => {
    return element.name === 'Roberta';
});
console.log(foundName);

const foundElem = sortedArray.find( (element) => {
    return element === 1024;
});
console.log(foundElem);

// Daca avem un singur parametru => parantezele sunt optionale
// Daca se scrie codul pe un singur rand si este o singura expresie => parantezele sunt oprionale + RETURN ESTE IMPLICIT
const foundName2 = arrayToFind.find( element => element.name === 'Roberta');
console.log(foundName2);


// includes
let includedElem = sortedArray.includes(200);
console.log(includedElem);


// objects
const createPerson = (name, age, gender) => {
    return {
        firstName: name,
        age: age,
        gender,
    }
}

const klaudia = createPerson('Klaudia', 21, 'female');
console.log(klaudia);


// create object using OBJECT LITERAL Method
const lastName = 'Dima';
const person = {
    name: 'Klaudia',
    lastName: 'Anton',
    age: 21,
    address: {
        street: 'Bucegi 22',
        country: 'Romania'
    },
    sayHi: function () {
        console.log(`${this.name} says "Hi!"`);
    },
    sayHiArrow: () => {
        console.log(`${this.lastName} says "Hi!"`);
    }
}
person.name = 'Roberta';
person.sayHi();
person.sayHiArrow();


const otherPerson = new Object(person);
otherPerson.name = 'KlaudiaR';
console.log(person);
console.log(otherPerson);


const bike = {
    gear: 6,
    setgear: function (gear) {
        this.gear = gear;
    },
    setGear() {
        this.gear = gear;
    }
};

bike.gear = 15;
console.log(bike);
bike.setgear(20);
console.log(bike);




// CLASSES
class Book {
    constructor(type, writer) {
        this.type = type;
        this.writer = writer;
    }
}
const supernatural = new Book('supernatural', 'yfvd');
const mythology = new Book('mythology', 'fueyf');
console.log(supernatural);
console.log(mythology);
