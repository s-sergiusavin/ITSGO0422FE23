//primitives:number.string.boolean.undefind,symbol
//references:objects:objects,array,functions,nul

//Numbers
let myNumber = 5;
let secondNumber=2;
let result;

result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber * secondNumber;
result = myNumber / secondNumber;
result = myNumber % secondNumber;
// **ridicare la putere

//strings 

let myString = "acesta este un mesaj" + result + "2 + 2";
myString = "O'heary";
myString = " ";
myString = 'acesta este un mesaj $[result]2 + 2$[3 + 3]';

//Booleans

letlighsOn = false ;

//Arrays 

const myArray = [5, 'test', true,]

// Objects

const myObject = {
    burger: "Big Mac",
    juice:"cola",
    'french fries' : 'with fries',
}


//Loops--bucle

let marksOf10Lei = 0;
marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei += 1; //cea mai folosita 
marksOf10Lei+1;
marksOf10Lei+3; // se adauga 3 la valoarea precedenta
++marksOf10Lei;

let total = 10;


// While loop

while (marksOf10Lei<total) {
    marksOf10Lei = marksOf10Lei + 1;
}

console.log ('Avem $[marksOf10Lei] bancnote de 10 lei');

let roomTemperature = 27;
let desiredTemperature = 21;
 while (roomTemperature > desiredTemperature) {
    roomTemperature -= 1;

 }

 // Do while loop== nu se foloseste

 //do {

// } while (true);


 //For loop --cea mai folosita

 let marksOf5Lei = 8;
 let totalof5Lei = 5;

 for (let index =0; index <totalof5Lei; index++) {
    marksOf5Lei +=5

 }

 let countries=['Romania', 'Bulgaria', 'Ucraina', 'Turcia' ];
 for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
 }

//  If else-- des folosite--conditional structures//
let var1 = 5;
let var2= '5';

// == verifica valoarea
// === verifica valoarea si tipul variabilelor- trei de agal trebuie folosit!!!!

if (var1 === var2) {
    console.log('Variabilele sunt egale');

} else {
    console.log('Variabilele nu sunt egale');

}

if (var1 !== var2) {
    console.log('Variabilele nu  sunt egale');

} else {
    console.log('Variabilele sunt egale');

}

let tempperature = 35;
let optimalTemperature = 21;

if (optimalTemperature < tempperature) {
    console.log('Este placut afara');

} else{
    console.log('Este canicula afara')
}

// !!! A nu se folosi intr-o bucla o conditie mereu adevarata

// while (optimalTemperature < tempperature) {
  //  tempperature +=1;
// }

//Logical operators

// && daca cel putin o conditie este false,totul este fals
//  || daca cel putin o conditie este adevarata, totul este adevarat

let pizzaPrice =40;
let hasGorgonzola = true;

if (pizzaPrice <= 30 || hasGorgonzola === true){
    console.log('Pizza isi merita banii');
} else {
    console.log('Pizza nu isi merita banii');
}

if (pizzaPrice <= 30 && hasGorgonzola === true){
    console.log('Pizza isi merita banii');
} else {
    console.log('Pizza nu isi merita banii');
}


//  Functions 

function logSomething () {
    console.log('Functia logSomething() a fost apelata/invocata'); //to call a function

}

logSomething();

//logSomething();
//logSomething();
//logSomething();



function addToSum(number) {
    let sum = 0;
    sum = sum + number;
    console.log('Rezultatul este ' + sum);

}
addToSum(3);
addToSum(5);

const removeFrom100 = function(number) {
console.log(`Rezultatul este ${100 - number}`);
}

removeFrom100(20);

function sendEmail (firstName, lastName, proffesion, result, exam){
    if (proffesion){
        console.log('Ai profesia ' + proffesion)
    }
    console.log(`Salutare ${lastName} ${firstName} ,
    Ai obtinut nota ${result} la examenul  ${exam} ,
    Mult succes mai departe ${firstName} `);
}
 sendEmail('denisia', 'damir', 'doctor', 10, 'bac');
 sendEmail ('denisia', 'damir', '', 10, 'bac')


 function logNumber(number = 10){
    console.log(number);
 }

 logNumber(5);
 logNumber();

 function temperaturaAfara (temperature){
    console.log('Temperatura exterioara este ' + temperature)
 }
 temperaturaAfara(40)

function orderPizza(i1, i2, i3){
    console.log('As dori sa comand o pizza cu: ' + ( i1 + i2 + i3));
}

orderPizza('salami','ruccola','cherry');
orderPizza("pastrama", "ciuperci", "masline");

function doSum (a, b) {
  console.log('Suma este:' + (a + b));
}
 //doSum(5,7);

 let sumResult = doSum (a,b);
 console.log(sumResult)


 function doAnotherPizza (i1, i2, i3){
    console.log ('Pizza cu' + i1 + i2 + i3 + "in preparare");
    pizzaOrder
 }
 const anounce = doAnotherPizza ("ciuperci", "ardei", "prosciutto");
 console.log(anounce)