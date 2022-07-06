//Scope

let test = "5let";
const testConst = "5const";
var constVar = "5var";
// console.log(test);
// console.log(testConst);
// console.log(constVar);

if (true) {
  let test = "7let";
  const testConst = "7const";
  var constVar = "7var";

  //   console.log(test);
  //   console.log(testConst);
  //   console.log(constVar);

  if (true) {
    let test = "9let";
    const testConst = "9const";
    var constVar = "9var";

    // console.log(test);
    // console.log(testConst);
    // console.log(constVar);
  }
}
// console.log(test);
// console.log(testConst);
// console.log(constVar);

let cannotSeeMe;
let globalVar = "unchanged";

function addTwo(number) {
  let cannotSeeMe = "no";
  globalVar = "Changed";

  console.log(globalVar);
  return number + 2;
}
// console.log(globalVar);

// const newNumber = addTwo(3);
// console.log(globalVar);
// console.log(cannotSeeMe);

// let needMoney = true;
// if (needMoney === true) {
//   const newNumber = addTwo(3);
// }

showTimisoara(); //Poate fi apelata inainte de initializare
//showBrasov();    NU POATE FI APELATA inainte de initializare
//showArad();// NU POATE FI APELATA inainte de initializare
// function exercises

//function declaration
function showTimisoara() {
  console.log("Timisoara");
}
showTimisoara();

// Function EXPRESION
const showBrasov = function () {
  console.log("Brasov");
};

showBrasov();
//ARROW FUNCTION
const showArad = () => {
  console.log("Arad");
};

showArad();

const addFive = (number) => {
  return number + 5;
};
const addFiveResult = addFive(1);

const makeBurger = (ingredient = "vita") => {
  console.log(`Ingredientul meu preferat din burger este ${ingredient} .`);
};

makeBurger();
makeBurger("pui");

let m = 5;
let n = "5";

if (m === n) {
  console.log("Sunt egale");
} else {
  console.log("nu sunt egale");
}

//Ternary operator ==> Avem conditie ? Valoare pentru adevar: Valoare pentru fals
m === n ? console.log("Sunt egale") : console.log("nu sunt egale");

console.log(m === n ? "Egale" : "Diferite");

// const rateMovie = (movie) => {
//   if (movie === "Pirates of Caribbean") {
//     console.log("10");
//   } else if (movie === "Home Alone") {
//     console.log("9");
//   } else if (movie === "The Godfather") {
//     console.log("8");
//   } else {
//     console.log("7");
//   }
// };
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
rateMovie("Pirates of Caribbean"); //10
rateMovie("Home Alone"); //9
rateMovie("The Godfather"); //8
rateMovie("Seinfeld"); //7
rateMovie();

const complexObject = {
  name: "Cosmin",
  address: {
    city: "iasi",
    zipcode: "700527",
  },
  favouriteMovies: ["Top Gun", "Interstellar", "Home Alone"],
  hobbies: ["Fotbal", "Gaming", "Eat", "travel"],
  watchMovie: function (movie) {
    console.log("Uita-te la" + movie);
  },
  sleep: () => {
    console.log("Du-te la culcare");
  },
  age: 30,
};

console.log(complexObject.age);
complexObject.sleep();
console.log(complexObject.favouriteMovies[0]);

// complexObject.watchMovie(complexObject.favouriteMovies[1]);
for (let i = 0; i < complexObject.favouriteMovies.length; i++) {
  complexObject.watchMovie(complexObject.favouriteMovies[i]);
}

//Flip a coin

let valoareMoneda = ["cap", "stema"];

if (valoareMoneda[Math.round(Math.random())] == "cap") {
  console.log("A iesit cap");
} else {
  console.log("A iesit PAJURA");
}
