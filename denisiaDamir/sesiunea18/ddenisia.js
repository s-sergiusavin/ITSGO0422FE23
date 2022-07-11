console.log("Log js")

//Scope

let test = "5let";    //---scope global
const testConst = "5const";
var constVar ='5var'
// console.log(test);
// console.log(testConst);
// console.log(constVar);

if (true){
    let test = "7let";
    const testConst = "7const";
    var constVar = "7var";
    // console.log(test);
    // console.log(testConst);
    // console.log(constVar);
    if(true){

        let test = "9let";
        const testConst ="9const";
        var constVar ='9var';
        // console.log(test);
        // console.log(testConst);
        // console.log(constVar);
    }
}


//console.log(test);
//console.log(testConst);
//console.log(constVar);


let globalVar = 'unchanged';

function addTwo (number){
    let cannotSeeMe = "no";
    console.log(cannotSeeMe);
    globalVar = "changed";

    if (true){
       // console.log(cannotSeeMe);

    }
    //console.log(cannotSeeMe);
    //  console.log(globalVar);
    return number + 2;
}

// console.log(globalVar);
let newNumber = addTwo(3);


// const newNuber = addTwo(3);
// console.log(globalVar);
// console.log(cannotSeeMe);


let needMoney = false;
 if (needMoney === true){
    const newNuber = addTwo(3);
 }
console.log(globalVar);


//showTimisoara();  // poate fi apelata inainte de declaratie
//showBrasov();     nu poate fi apelata inainte de declaratie 
//showArad();       nu poate fi apelata inainte de declaratie 

// Functions exercises


//Function declaration 1
  
  function showTimisoara(){
    console.log('Timisoara');
}
showTimisoara();

//Function expression 2
const showBrasov = function () {
    console.log('Brasov');
}
showBrasov();


// Arrow function   3   cea mai folosita metoda de a scrie 
const showArad = () => {
    console.log('Arad');

}
showArad ();


const addFive = (number) =>{
  return number + 5;
}

//const addFive = number => number + 5 ;

const addFiveResult = addFive(1);

const makeBurger = (ingredient='vita') => {
    console.log (`burgerul meu preferat este cu ${ingredient}`);

}
makeBurger();
makeBurger('pui');


let m = 5;
let n = '5';

if(m===n) {
    console.log('egale');
}else {
    console.log('diferite');

}

//Ternary operator  -----> conditie  ? valoare pt adevar : valoare pt fals
m===n   ?  console.log('egale') : console.log('diferite');
console.log(m===n   ?  "egale" :'diferite');


const rateMovie = (movie) =>{
    switch(movie) {
        case 'Pirates of Caribbean':
          console.log("10");
          break;
        case 'Home alone' :
        console.log("9");
          break;
        case 'The GodFather':
        console.log("8");
        break;
        case 'Seinfeld':
            console.log("7");
            break;

        default:
        console.log("2");
    }
};

rateMovie('Pirates of Caribbean'); //10
rateMovie( 'Home alone'); //9
rateMovie( 'The GodFather');//8
rateMovie( 'Seinfeld');//7


const complexObject = { 
    name: Denisia ,
    adress : {
        city: 'Iasi' ,
        zipCode : '200200'
    } ,
    favouritesMovie: ['Top Gun' , 'Home Alone', 'Seinfield'] ,
    hobbies :['Travel', 'Eat', 'Drink'],
    watchMovie: function (movie){
        console,log('Uita-te la' + movie);

    },
    sleep: () => {
        console.log('Du=te la culcare');
    },
    age: 30,
    hasPassport: true


};

console.log(complexObject.age);
console.log(complexObject.adress.zipCode);
complexObject.sleep();

//complexObject.watchMovie(complexobject.favouritesMovie[2]);
//complexObject.watchMovie(complexObject.favouritesMovie[0]);
//complexObject.watchMovie(complexObject.favouritesMovie[1]);
//complexObject.watchMovie(complexObject.favouritesMovie[2]);


  for (let i = 0 ; i < complexObject.favouritesMovie.length; i++){
    const movies = complexObject.favouritesMovie[i];
    complexObject,watchMovie(movies);
  }

//Flip a coin 

let valoareMoneda = ["cap", 'stema'];

if (valoareMoneda[Math.round(Math.random())]=== "cap"){
    console.log('A iesit cap');

} else {
    console.log('A iesit stema');
}
 

