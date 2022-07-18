console.log("Session20::Array Methods");
let array = [1, 2, 3, "four", 5, 6, 7];
// console.log(array.length);
// array[1] = 100;
// console.log(array);
// array[4] = 5;
// console.log(array);
// array[7] = 3;
// console.log(array);

//                      Adaugare sstergere elemente array la final push&pop

array.push(5);
console.log("array pushed", array);
array.pop();
console.log("array popped:", array);
console.log(array.push(5));

//                      Adaugare sstergere elemente array la inceput unshift & shift

array.unshift(0);
console.log("array unshifted // added ", array);
array.shift();
console.log("array shifted // popped from the beginning of the array", array);

//                      Iterare arrays

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log("::________________________________::");
//                                                 forEach

array.forEach((element) => {
  console.log(element);
});
console.log("::___________prin functie predefinita___________::");

// poate fi o functie anterior definta

function iterateArray(element) {
  console.log(element);
}
array.forEach(iterateArray);
console.log("::____________________::");

//                                                  array.map()

const newArray = array.map((element) => {
  return element + 1;
});
console.log("new array, with array.map", newArray);
console.log("::_________indexOf()___________::");
//              return index of an array element
console.log(array.indexOf(3));
array[array.indexOf(3)] = 7;
console.log(array);
console.log("::_______Copy elements________::");

//                                                Copy elements

let arrayCopy = array;
console.log(arrayCopy);
arrayCopy[0] = "zero";
console.log(arrayCopy);
console.log(
  "prin atribuire avem o referinta/shallow copy la arrayul initial, daca modificam newArray modificam si arrayul initial"
);

console.log("::______slice() method________::");

arrayCopy = array.slice(2); //indexul de unde incepe sa taie
console.log(
  "Se creaza un nou shallow copy (referinta), prin sliceingul arrayului initial",
  arrayCopy
);
console.log(
  "slice cu doi parametri nr pozitive, de la indexul specificat de primul parametru pana la indexul repr de al doilea parametru",
  array.slice(2, 5)
);
//                                      cut elements

// let changedArray = array.splice(2);
// console.log(
//   "splice(): a impartit arrayul initial in doua arrayuri diferite, incepand cu indexul reprez de parametrul functiei",
//   changedArray
// );
console.log(array);
console.log(
  "al doilea parametru reprezinta numarul de elemente ce vor veni decupate"
);
// changedArray = array.splice(1, 2);

/**
                                     Filter()
                                     nu modifica arrayul initial
                                     returneaza un array nou din rezultate
 */

console.log(
  array.filter((element) => {
    return element > 3;
  })
);

/**
 *                                          reverse array
 *                                          modifica arrayul initial
 */

array.reverse();
console.log("array inversat: ", array);

/**
 *                                          concatenare arrays
 *
 */

const concatArray = ["add", "me"];
console.log("arrays concatenate ", array.concat(concatArray));

/**
 *                                          transform array -> string
 *                                          parametrul repr ceea delimiteaza fostele elementele din array, in noul string
 */

let arrayToString = array.join(" 8 ");
console.log("array to string: ", arrayToString);

/**
 *                                          reduce array -> string
 *
 */

const reduceArray = [1, 2, 3, 4];

const reducedValue = reduceArray.reduce((total, value) => {
  return total + value;
});
console.log(reducedValue);

/**
 *                                          Sorting arrays
 *
 */

let arrayToSort = [12, 10, 3, 5, 443, -2, 432];
let sortedArray = arrayToSort.sort(); // sortare aflanumerica crescatoare, daca e fara parametri
sortedArray = arrayToSort.sort((a, b) => {
  return a - b; //sortare crescatoare
  //   return b - a; // sortare descrescatoare
});

/**
 *                                          Findin stuff in arrays
 *
 */

const foundElemIndex = sortedArray.find((element) => {
  return element === 443;
});
console.log(foundElemIndex);

const arrayToFind = [
  { name: "Calin", city: "Zurich" },
  { name: "Andrei", city: "Hong Kong" },
  { name: "Sergiu", city: "New York" },
  { name: "Andrei", city: "Taipei" },
  { name: "Sergiu", city: "Kiev" },
];

// const foundName = arrayToFind.find((element) => {
//   return element.name === "Sergiu";
// });
// console.log(foundName);

const foundName = arrayToFind.find((element) => element.name === "Sergiu");
console.log(foundName);

/**
 *                                          Includes
 *
 */

let includedElem = sortedArray.includes(200);
console.log(includedElem);

/**
 *                        Objects
 */
console.log("\n::Objects::\n\n");
const createPerson = (name, age, gender) => {
  return {
    firstName: name,
    age: age, // age, era suficient deoarece variabila din obiect are acealsi nume cu variabila cu care este asignata
    gender,
  };
};

const sergiu = createPerson("Sergiu", 18, "male");
const dragos = createPerson("Dragos", 23, "male");
console.log(sergiu);

/**
 *                Create objects using OBJECT LITERAL
 */

const person = {
  name: "Sergiu",
  lastName: "Savin",
  age: 30,
  address: { street: "street 1", country: "ro" },
  sayHiArrow: () => {
    console.log(`${this.name} not working`);
  }, // NU MERGE CU ARROW FUNCTIONS!!!!!!!!!!
  // IN CAZUL ARROW FUNCTIONS THIS ESTE DIFERIT ( GLOBAL CONTEXT STUFF)
  sayHi: function () {
    console.log(`${this.name} says hi`);
  },
};

person.sayHi();

const otherPerson = new Object(person); // DOAR O REFERINTA!
otherPerson.name = "SergiuS";
console.log("other object: ", otherPerson);
console.log("initial object", person);

const bicycle = {
  gears: 21,
  setGear(gear) {
    this.gears = gear;
  },
};

bicycle.setGear(30);
console.log(bicycle);

/**
 *                            CLASSES
 */

class Book {
  constructor(type, writer) {
    this.type = type;
    this.writer = writer;
  }
}

const bassme = new Book("basme", "Petre Ispirescu");
const povesti = new Book("povesti", "Ion Git Branch");
console.log(bassme);
console.log(povesti);

bassme.writer = "Fratii Grim & Evil";
console.log(bassme);
console.log(povesti);

bassme.year = 1984;
console.log(bassme);
