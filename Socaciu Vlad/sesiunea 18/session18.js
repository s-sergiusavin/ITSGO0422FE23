// Scope

let test = 5; // global scope
const testConst = '5const'
console.log(test);
console.log(testConst);

if (true) {
    let test = 7; 
    const testConst = '7const'
    console.log(testConst);
}

console.log(testConst);

let globalVar = 'unchanged';

function addTwo(number) {
    let cannotSeeMe = 'no';
    console.log(cannotSeeMe);
    globalVar = 'changed';

    if (true){
        console.log(cannotSeeMe);
    }
    console.log(globalVar);
    return number + 2;
}

console.log(globalVar);

const newNumber = addTwo (3);

console.log(globalVar);


// console.log(cannotSeeMe);


let needMoney = false;

// function excercises


// Function declaration
function showTimisoara () {
    console.log('Timisoara');
}
showTimisoara();

// Function expression
const showBrasov = function (){
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

const addFiveResult =  addFive(1);

const makeBurger = (ingredient = 'vita') => {
    console.log(`Burgerul meu preferat este cu ${ingredient}`);
}

makeBurger();
makeBurger('cheddar');

let m = 5;
let n = '5';

if (m === n) {
    console.log('m este egal cu n');
} else {
    console.log('nu sunt egale');
}

// ternary operator ===> conditie ? valoare pt adevar : valoare pt fals
m === n ? console.log('egal') : console.log('diferit');
console.log(m === n ? 'egal' : 'diferit');

// const rateMovie = (movie) => {
//     if(movie === 'top gun'){
//         console.log(`10`);
//     } else if (movie === 'home alone'){
//         console.log('9');
//     } else if (movie === 'the godfather'){
//         console.log('8');
//     } else {
//         console.log('7');
//     }
//}
// rateMovie ('top gun'); // 10
// rateMovie ('home alone'); // 9
// rateMovie ('the godfather'); // 8
// rateMovie ('harry potter'); // 7




const rateMovie = (movie) => {
    switch(movie) {
        case 'top gun':
            console.log(`10`);
          break;
        case 'home alone':
            console.log(`9`);
          break;
        case 'the godfather':
            console.log(`8`);
          break;
        case 'harry potter':
            console.log(`7`);
          break;
        default:
            console.log(`2`);
      }
}

rateMovie ('top gun'); // 10
rateMovie ('home alone'); // 9
rateMovie ('the godfather'); // 8
rateMovie ('harry potter'); // 7
rateMovie ();
rateMovie ('seinfeld');

// flip a coin

let valoareMoneda = ['cap', 'stema'];

if (valoareMoneda[Math.round(Math.random())]){
    console.log('a iesit cap');
} else {
    console.log('a iesit stema');
}

