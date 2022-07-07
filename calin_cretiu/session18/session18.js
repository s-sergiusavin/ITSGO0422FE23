// console.log("Hey din fisier");

//about                                   SCOPE

let test = "5let";
const testConst = "5const";
var constVar = "5var";
// console.log(testConst);
// console.log(test);

if (true) {
  let test = "7let";
  const testConst = "7const";
  var constVar = "7var";
  //   console.log(constVar);
  //   console.log(testConst);
  //   console.log(test);
}

// console.log(test);
// console.log(testConst);
// console.log(constVar);

let globalVar = "unchanged";

function addTwo(number) {
  let cannotSeeMe = "no";
  console.log(cannotSeeMe);
  globalVar = "changed";
  if (true) {
    console.log("din if", cannotSeeMe);
  }
  //   console.log(globalVar);
  return number + 2;
}
console.log(globalVar);
// const newNumber = addTwo(3);
// console.log(cannotSeeMe);

// console.log(globalVar);
let needMoney = false;
if (needMoney === true) {
  const newNumber = addTwo(3);
}

//                                      Function exercises
// Function declaration
showTimisoara(); //Merge
// showArad(); //Nu merge!

function showTimisoara() {
  console.log("Timisoara");
}
showTimisoara();

//Function expression
const showBrasov = function () {
  console.log("Brasov");
};
showBrasov();

//Arrow function
const showArad = () => {
  console.log("Arad");
};
showArad();

// const addFive = (number) => {
//   return number + 5;
// };

const addFive = (number) => number + 5;
const addFiveResult = addFive(1);

const makeBurgre = (ingredient = "vita") => {
  console.log(`Burgerul meu preferat este cu ${ingredient}`);
};

makeBurgre();
makeBurgre("Piu");

let m = 5;
let n = "5";

if (m === n) {
  console.log("Sunt egale");
} else {
  console.log("Nu sunt egale");
}

//                              Ternary operator
//                              conditie? linie pt adevarat: linie pentru fals
m === n ? console.log("egale") : console.log("diferite");
console.log(m === n ? "egale" : "diferite");
m !== n && console.log("diferite");

// const rateMovie = (movie) => {
//   console.log(movie);
//   if (movie === "Pirates of the Carribean") {
//     console.log(10);
//   } else if (movie === "Home Alone") {
//     console.log(9);
//   } else if (movie === "Pirates of the Carribean") {
//     console.log(8);
//   } else {
//     console.log(7);
//   }
// };
const rateMovie = (movie) => {
  switch (movie) {
    case "Pirates of the Carribean": {
      console.log(19);
    }
    case "Home Alone": {
      console.log(9);
    }
    case "The Godfather": {
      console.log(8);
    }
    case "Seinfeld": {
      console.log(7);
    }
    default: {
      console.log(2);
    }
  }
};
rateMovie("Pirates of the Carribean"); //10
// rateMovie("Home Alone"); // 9
// rateMovie("The Godfather"); //8
// rateMovie("Seinfeld"); //7

const complexObject = {
  name: "Calin",
  address: {
    oras: "Timisoara",
    zipcode: "300342",
  },
  favoriteMovies: ["Top Gun", "Wolf of Wall Street", "Shogun"],
  hobbies: ["Trave", "Biking", "Drinking"],
  watchMovie: function (movie) {
    console.log("Watch this ", movie);
  },
  sleep: (hours) => {
    console.log("Slept ", hours, " hours");
  },
  age: 30,
  hasPassport: true,
};

console.log(complexObject.age);
console.log(complexObject.address.zipcode);
complexObject.sleep(8);
console.log(complexObject);
console.dir(complexObject);

for (let i = 0; i < complexObject.favoriteMovies.length; i++) {
  console.log(complexObject.favoriteMovies[i]);
}

// flip a coin

function flip_coin() {
  let value = Math.random();
  if (value < 0.5) {
    console.log("Moneda: Cap");
  } else {
    console.log("Moneda: Pajura");
  }
}

flip_coin();
