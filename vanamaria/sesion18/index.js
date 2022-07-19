//scope
let test ="5let";
const testConst ="5const";
var constVar="5var";
console.log(test);
console.log(testConst);
console.log(constVar);

if(true){
let test= "7let";
const testConst="7const";
var constVar="7var";
console.log(test);
console.log(testConst);
console.log(constVar);
    if(true){
    let test= "9let";
    const testConst="9const";
    var constVar="9var";
    console.log(test);
    console.log(testConst);
    console.log(constVar);}
}

 console.log(test);
 console.log(testConst);
 console.log(constVar);
 
 


 let globalVar='unchanged';

 function addTwo(number){
    //let cannotSeeMe ='no';
    //console.log(cannotSeeMe);
    globalVar='changed';
    console.log(globalVar);
   // if(true){
        //console.log(cannotSeeMe);
    //}
    return number+2;
 

 }

 console.log(globalVar); ``
//const newNumber=addTwo(3); 
console.log(globalVar);

let needMoney=false;
if(needMoney){
    const newNumber=addTwo(3);
}

//Function Exercises

//function declaration
function showTimisioara(){
    console.log('Timisioara');
}
showTimisioara();
//showBrasov--------Nu poate fi apelat inainte de declaratie
//showArad ----------- Nu poate fi apelata inainte de declaratie


//Function expresion
const showBrasov=function(){
    console.log('Brasov');
}
showBrasov();

//Varianta simplificata de a scrie o functie
//Arrow function

const showArad= ()=>{
    console.log('Arad');

}
showArad();

//Function Exercises
const addfive=(number)=>{
    return number+5;
}
const addFiveResult=addFive(1);


const makeBurger=(ingredient='vita')=>{
    console.log( `burgerul meu preferat este cu ${ingredient}`);
}
makeBurger();
makeBurger('pui');
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


//console.log(cannotSeeMe);

// // Exemplu-----Cosmin
// let a=6;
// let b=3;
// let y=8;
// let c;

// function adunare(num1,num2)
// {
//     let rezultat=num1+num2;
//     return rezultat;
// }
// c=adunare(a,b);
// console.log(adunare(a,y));
// console.log(c);


// function scadere(num1,num2){
//     return num2-num1;
// }
// console.log(scadere(b,a));

// //Media aritmetica
// function mediaAritmetica( numb1,numb2){
//     return  adunare(numb1,numb2)/2;
// }
// console.log(mediaAritmetica (a,y));
















