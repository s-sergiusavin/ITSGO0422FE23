// Scope

let test = 5;
const testConst = '5cont';
var constVar = '5var';
console.log(test);
console.log(testConst);
console.log(constVar);

if (true) {
    let test = 7;
    const testConst = '7cont';
    var constVar = '7var';
    console.log(test);
    console.log(testConst);
    console.log(constVar);
    if (true) {
        let test = 9;
        const testConst = '9cont';
        var constVar = '9var';
        console.log(test);
        console.log(testConst);
        console.log(constVar);
    }
}

console.log(test);
console.log(testConst);
console.log(constVar);

let test = 8; // NU lasa redeclarearea 

let cannotSeeMe;
let globalVar = 'unchanged';

function addTwo(number) {
    globalVar = 'changed';
    console.log(globalVar);
    return number + 2;
}

console.log(globalVar);

const newNumber = addTwo(3);

console.log(globalVar);



showTimisoara();     //---> POATE fi apelata inainte de declaratie
// showBrasov();  ---> NU poate fi apelata inainte de declaratie
// showArad();  ---> NU poate fi apelata inainte de declaratie

// Function exercises
// Function declaretion
function showTimisoara() {
    console.log('Timisoara');
}
showTimisoara();

// Function expresion
const showBrasov = function () {
    console.log('Brasov');
}
showBrasov();

// Arrow function
const showArad = () => {
    console.log('Arad');
}
showArad();


const addFive = (number) => {
    return number + 5;
}
// const addFive = (number) => number + 5;
const addFiveResult = addFive(1);

// Arrow function with default params
const makeBurger = (ingredient = 'vita') => {
    console.log(`burgerul meu preferat este cu ${ingredient}`);
}

makeBurger();
makeBurger('Pui');




let m = 5;
let n = '5';

if (m === n) {
    console.log('equal');
} else {
    console.log('different');
}
 
// Ternary operator  ---> conditie ? valoare pt adevar : valoare pt fals;
m === n ? console.log('equal') : console.log('different');
console.log(m === n ? 'equal' : 'different');



// const rateMovie = (movie) => {
//     if (movie === 'Twilight') {
//         console.log('10');
//     } else if (movie === 'Home Alone') {
//         console.log('9');
//     } else if (movie === 'Seinfeld') {
//         console.log('8');
//     } else if (movie === 'The Godfather') {
//         console.log('7');
//     }
// }

const rateMovie = (movie) => {
    switch (mobie) {
        case 'Twilight':
            console.log('10');
            break;
        case 'Home Alone':
            console.log('9');
            break;
        case 'Seinfeld':
            console.log('8');
            break;
        case 'The Godfather':
            console.log('7');
            break;
        default:
            console.log('2')
    }
};

rateMovie('Twilight'); // 10
rateMovie('Home Alone'); // 9
rateMovie('Seinfeld'); // 8
rateMovie('The Godfather'); // 7
rateMovie();
rateMovie('Harry Potter');



const complexObject = {
    name: 'Roberta',
    address: {
        city: 'Focsani',
        zipcode: '500500',
    },
    favouriteMovies: ['Home Alone', 'Twilight'],
    hobbies: ['travel', 'read', 'paint'],
    watchMovie: function (movie) {
        console.log('Uita-te la' + movie);
    },
    sleep: () => {
        console.log('Du-te la culcare');
    },
    age: 21,
    hasPassport: true
};

console.log(complexObject.age);
console.log(complexObject.address.zipCode);
// console.log(complexObject.sleep());
complexObject.sleep();

// console.log(complexObject);
// console.dir(complexObject);
// console.log(console);

complexObject.watchMovies(complexObject.favouriteMovies[2]);
for (let i = 0; i < complexObject.favouriteMovies.length; i++) {
    complexObject.watchMovies(complexObject.favouriteMovies[i]);
}
for (let i = 0; i < complexObject.favouriteMovies.length; i++) {
    const movies = complexObject.favouriteMovies[i];
    complexObject.watchMovies(movies);
}



// Flip a coin

let valoareMoneda = ['cap', 'pajura'];

if (valoareMoneda[Math.round(Math.random())] == 'cap') {
    console.log('A iesit cap');
} else {
    console.log('A iesit pajura');
}

console.log(Math.random());
console.log(Math.round(Math.random()));

