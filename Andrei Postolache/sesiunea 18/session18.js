console.log('log js');


// Scope

let test = '5let';
const testConst = '5const';
var constVar = '5var';
console.log(test);
console.log(testConst);
console.log(constVar);

if(true) {
    let test = '7let';
    const testConst = '7const';
    var constVar = '7var';
    console.log(test);
    console.log(testConst);
    console.log(constVar);
    if(true){
        let test = '9let';
        const testConst = '9const';
        var constVar = '9var';
        console.log(test);
        console.log(testConst);
        console.log(constVar);
    }
}

console.log(test);
console.log(testConst);
console.log(constVar);


let globalVar = 'unchanged';

function addTwo(number) {
    // let cannotSeeMe = 'no';
    // console.log(cannotSeeMe);
    globalVar = 'changed';

    if(true){
        // console.log(cannotSeeMe);
    }

    console.log(globalVar);
    return number + 2;
}

console.log(globalVar);

// const newNumber = addTwo(3);

// console.log(globalVar);


let needMoney = false;

if(needMoney === true) {
    const newNumber = addTwo(3);
}

console.log(globalVar);


// Function exercises

//Function declaration
function showTimisoara() {
    console.log('Timisoara');
}

showTimisoara();            // poate fi apelata inainte de declaratie

//Function expression
const showBrasov = function() {
    console.log('Brasov');
}

showBrasov();                // nu poate fi apelata inainte de declaratie

//Arrow function
const showArad = () => {
    console.log('Arad');
}

showArad();                 // nu poate fi apelata inainte de declaratie

const addFive = (number) => {
    return number + 5;
}

const addFiveResult = addFive(1);

// Arrow function with default params
const makeBurger = (ingredient = 'vita') => {
    console.log(`Burgerul meu preferat este cu ${ingredient}`);
}

makeBurger();
makeBurger('Pui');

let m = 5;
let n = '5';

if(m === n) {
    console.log(`Sunt egale`);
} else {
    console.log(`Nu sunt egale`);
}

// Ternary operator ===> CONDITIE ? VALOARE PENTRU ADEVAR : VALOARE PENTRU FALS
m === n ? console.log(`Sunt egale`) : console.log(`Nu sunt egale`);
console.log(m === n ? `Sunt egale` : `Nu sunt egale`);


const rateMovie = (movie) => {
    switch (movie) {
        case 'Pirates of Caribbean':
        console.log("10");
        break;
        case 'Home Alone':
        console.log("9");
        break;
        case 'The Godfather':
        console.log("8");
        break;
        case 'Seinfeld':
        console.log("7");
        break;
    }
}

rateMovie('Pirates of Caribbean');
rateMovie('Home Alone');
rateMovie('The Godfather');
rateMovie('Seinfeld');

const complexObject = {
    name: 'Andrei',
    address: {
        city: 'Iasi',
        zipCode: '731044' 
    },
    favouriteMovies: ['Top Gun', 'Home Alone', 'Seinfeld'],
    hobbies: ['Travel', 'Eat', 'Drink'],
    watchMovie: function (movie) {
        console.log('Uita-te la' + movie);
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
complexObject.watchMovie(complexObject.favouriteMovies[2]);

for (let i = 0; i < complexObject.favouriteMovies.length; i++) {

    complexObject.watchMovie(complexObject.favouriteMovies[i]);
}

// Flip a coin

let valoareMoneda = 'cap';

if (valoareMoneda[Math.round(Math.random())] == 'cap') {
    console.log('A iesit cap');
} else {
    console.log('A iesit stema');
}

console.log(Math.random());