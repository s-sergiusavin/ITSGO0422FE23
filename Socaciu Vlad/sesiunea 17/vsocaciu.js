// Logical operators

// && - daca cel putin o conditie e falsa atunci totul e fals
// || - daca cel putin o conditie e adevarata, totul e adevarat

let pizzaPrice = 40;
let hasGorgonzola = true;

if (pizzaPrice <= 30 || hasGorgonzola === true) {
    console.log('Pizza isi merita banii');
} else {
    console.log('Pizza nu isi merita banii');
}

if (pizzaPrice <= 30 && hasGorgonzola === true) {
    console.log('Pizza isi merita banii');
} else {
    console.log('Pizza nu isi merita banii');
}

// Functions 

function logSomething() {
    console.log('Functia logSomething() a fost apelata sau invocata'); // to call a function
}

logSomething();



function addToSum(number) {
    let sum = 0; 
    sum = sum + number;
    console.log(`Rezultatul este ${sum}`);
}

addToSum(3);
addToSum(5);

const removeFrom100 = function (number){
    console.log(`Rezultatul este ${100 - number}`);
}

removeFrom100(20);
removeFrom100('Marcel');

function sendEmail(firstName, lastName, profession, result, exam){
    if(profession){
        console.log('Ai profesia ' + profession);
    }
    console.log(`Salutare ${lastName} ${firstName}, 
    ai obtinut nota ${result} la examenul ${exam}.
    Mult succes mai departe ${firstName}.`);
}

sendEmail('vlad', 'Socaciu', 'itist', 10, 'capacitate');
sendEmail('vlad', 'Socaciu', '', 10, 'capacitate');

function logNumber(number = 10){
    console.log(number);
}
logNumber(5);
logNumber();

function showTemperatureOutside (temperature){
    console.log(`temperatura este ${temperature}`);
}

showTemperatureOutside(20);

function orderPizza (i1, i2, i3) {
    console.log(`pizza contine ${i1}, ${i2}, ${i3}`);
}

orderPizza ('sos de rosii', 'mozzarella', 'salami');
orderPizza ('sos de rosii', 'mozzarella', 'jumari');

function aduna (a, b){
    console.log(`suma este ${a + b}`);
    return a + b;
}

// aduna(20, 40)

let sumResult = aduna(20, 40);
console.log(sumResult);


let pizzaOrder = 0;
function makeAnotherPizza (i1, i2, i3){
    console.log(`pizza cu ${i1}, ${i2}, ${i3}`);
    pizzaOrder++;
    return pizzaOrder;
}

let announce = makeAnotherPizza ('sos de rosii', 'mozzarella', 'jumari');
announce = makeAnotherPizza ('sos de rosii', 'mozzarella', 'jumari');
announce = makeAnotherPizza ('sos de rosii', 'mozzarella', 'jumari');
console.log(announce);
