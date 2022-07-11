console.log('Log js');

// Scope

let test = '5let';
const testConst = '5const';
var constVar = '5var';
// console.log(test);
// console.log(testConst);
// console.log(constVar);

if (true) {
    let test = "7let";
    const testConst = "7const";
    var constVar = "7var";
    // console.log(test);
    // console.log(testConst);
    // console.log(constVar);
    if (true) {
        let test = "9let";
        const testConst = "9const";
        var constVar = "9var";
        // console.log(test);
        // console.log(testConst);
        // console.log(constVar);
    }
}

//  console.log(test);
//  console.log(testConst);
//  console.log(constVar);


 let globalVar = 'unchanged';

 function addTwo(number) {
    
    globalVar = 'changed';

    if (true) {
        let cannotSeeMe = "no";
        //  console.log(cannotSeeMe);
    }
    //  console.log(cannotSeeMe);
    console.log(globalVar);
    return number + 2;
 }

 console.log(globalVar);

//  const newNumber = addTwo(3); 

//  console.log(globalVar);
//  console.log(cannotSeeMe);

let needMoney = true;

if (needMoney === true) {
    const newNumber = addTwo(3); 
}

console.log(globalVar);


showTimisoara();    // poate fi apelata inainte de declaratie
// showBrasov();  // nu poate fi apelata inainte de declaratie
// showArad();    // nu poate fi apelata inainte de declaratie 

//  Function exercises

// Function declaration
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
    console.log("Arad");
}
showArad();

const addFive = (number) => {
    return number + 5;
}

// const addFive = number =>  number + 5;

const addFiveResult = addFive(1);

// Arrow function with default params
const makeBurger = (ingredient = 'Vita') => {
    console.log(`burgerul meu preferat este cu ${ingredient}`);
}

makeBurger();
makeBurger('Pui');


let m = 5;
let n = '5';

if (m === n) {
    console.log('Egale');
} else {
    console.log('Diferite');
}

// Ternary operator ===> conditie ? valoare pt adevar : valoare pt fals
m === n ? console.log("Egale") : console.log("Diferite");
console.log(m === n ? "Egale" : "Diferite");

// const rateMovie = (movie) => {
//     if (movie === "Pirates of Caribbean") {
//       console.log("10");
//     } else if (movie === "Home Alone") {
//       console.log("9");
//     } else if (movie === "The Godfather") {
//       console.log("8");
//     } else {
//       console.log("7");
//     }
// }

const rateMovie = (movie) => {
  switch (movie) {
    case "Pirates of Caribbean":
     console.log("10");
      break;
    case "Home Alone":
      console.log("9");
      break;
    case "The Godfather":
      console.log("8");
      break;
    case "Seinfeld":
      console.log("7");
      break;
    default:
    console.log("2");
  }
};

rateMovie('Pirates of Caribbean'); // 10
rateMovie('Home Alone'); // 9
rateMovie('The Godfather'); // 8
rateMovie("Seinfeld"); // 7
rateMovie();
rateMovie("Harry POtter");

const complexObject = {
    name: 'Sergiu',
    address: {
        city: 'Brasov',
        zipCode: '500500'
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
    const movies = complexObject.favouriteMovies[i];
    complexObject.watchMovie(movies);
}

// Flip a coin

let valoareMoneda = ['cap', 'stema'];


if (valoareMoneda[Math.round(Math.random())] === 'cap') {
    console.log('A iesit cap');
} else {
    console.log('A iesit stema');
}
