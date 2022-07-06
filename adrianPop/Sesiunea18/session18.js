console.log('Log JS');

// Scope

let test = '5let';
const testConst = '5const';
// console.log(test);
// console.log(testConst);
if (true) {
    let test = '7let';
    // console.log(test);
    const testConst = '7const';
    // console.log(testConst);

}

// console.log(test);
// console.log(testConst);


let globalVar = 'unchanged';

function addTwo(number) {
    let cannotSeeMe = 'no';
    // console.log(cannotSeeMe);

    if (true) {
        // console.log(cannotSeeMe);
    }
    globalVar = 'changed';
    console.log(globalVar);
    return number + 2;
}

// console.log(globalVar);

// const newNumber = addTwo(3);

console.log(globalVar);

// console.log(cannotSeeMe);

let needMoney = true;

if (needMoney === true) {
    const newNumber = addTwo(3);
}
console.log(globalVar);


showTimisoara(); // poate fi apelata inainte de declaratie
// showBrasov(); // nu poate fi apelata inainte de declaratie
// showArad(); // nu poate fi apelata inainte de declaratie
// Function exercises
// 
//1 = Function declaration
function showTimisoara() {
    console.log('Timisoara');
}
showTimisoara();

//2 = Function expression
const showBrasov = function () {
    console.log('Brasov');
}
showBrasov();

//3 Arrow function
const showArad = () => {
    console.log('Arad');
}
showArad();


const addFive = (number) => {
    return number + 5;
}

// const addFive = number => number + 5;

const addFiveResult = addFive(1);

// Arrow function with default params
const makeBurger = (ingredient = 'Vita') => {
    console.log(`Burgerul meu preferat contine ${ingredient}`);
}

makeBurger();
makeBurger('Pui');
console.log('----------------------------');

let m = 5;
let n = '5';

if (m === n) {
    console.log('Egale');
} else {
    console.log('Diferite');
}

console.log('----------------------------');
// Ternary operator
m === n ? console.log('Egale') : console.log('Diferite');
console.log(m === n ? 'Egale' : 'Diferite');

console.log('----------------------------');
// const rateMovie = (movie) => {
//     if (movie === 'Pirates of Caribbean') {
//         console.log('10');
//     } else if (movie === 'Home Alone') {
//         console.log('9');
//     } else if (movie === 'The Godfather') {
//         console.log('8');
//     } else {
//         console.log(7);
//     }
// }

const rateMovie = (movie) => {
    switch (movie) {
        case 'Pirates of Caribbean':
            console.log('10');
            break;
        case 'Home Alone':
            console.log('9');
            break;
        case 'Matrix':
            console.log('7');
            break;
        case 'The Godfather':
            console.log('8');
            break;
        default:
            console.log(2);
    }
};

rateMovie('Pirates of Caribbean'); //10
rateMovie('Home Alone'); //9
rateMovie('Matrix'); //7
rateMovie('The Godfather'); //8
rateMovie('Pirates of Caribbean'); //10
rateMovie('Ceva'); 
rateMovie();
console.log('----------------------------');

const complexObject = {
    name: 'Adrian',
    address: {
        city: 'Timisoara',
        zipCode: '500500',
    },
    favouriteMovies: ['Top Gun', 'Home Alone', 'Seinfeld'],
    hobbies: ['Travel', 'Eat', 'Drink'],
    watchMovie: function (movie) {
        console.log('Uita-te la ' + movie)
    },
    sleep: () => {
        console.log('Du-te la culcare');
    },
    age: 30,
    hasPassport: true
};

console.log(complexObject.age);
console.log(complexObject.address.zipCode);
complexObject.sleep();

console.log(complexObject);
console.dir(complexObject);
console.log(console);

complexObject.watchMovie(complexObject.favouriteMovies[2]);

for (let i = 0; i < complexObject.favouriteMovies.length; i++) {
    complexObject.watchMovie(complexObject.favouriteMovies[i]);
}

// Flip a coin

let valoareMoneda = ['cap','stema'];
if (valoareMoneda[Math.round(Math.random())] === 'cap') {
    console.log('A iesit cap');
} else {
    console.log('A iesit stema');
}

console.log(Math.round(Math.random()));





