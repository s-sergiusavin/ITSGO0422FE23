// RECAPITULARE

// 1. numbers
let number1 = 5;
let number2 = 2;
let result;

// 2. strings
let myString = "Acesta este un mesaj" + result + "2 + 2";
myString = "O'heary";
myString = '';   // ---> string gol
myString = `Acesta este un mesaj${result}2 + 2 ${3 + 3}`;    // ---> nu o să afișeze 3 + 3, ci rezultatul adunării => + 26

// 3. boolean
let lightOn = false;

// 4. arrays
const myArray = [5, 'test', [3, '53'], undefined, null, {name: 'klaudia'}];
console.log(myArray[3][1]);
console.log(myArray[6].name);

// 5. objects
const myObject = {
    burger: 'Big Mac',
    soda: 'Cola',
    'french fries': 'with fries',
    address: {
        street: 'Sessame Street',
        number: 47
    },
    sauce: ['ketchup', 'mayo'],
};




// LOOPS
let marksOf10Lei = 0;

marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei += 1;
marksOf10Lei ++;            // ---> TOATE cele 4 expresii inseamna ACELASI LUCRU (+1)
++marksOf10Lei;

marksOf10Lei+3;    // ---> se adauga 3 la valoarea precedenta

let total = 10;

// WHILE loop
while (marksOf10Lei < total) {
    marksOf10Lei = marksOf10Lei + 1;
}
console.log(`Avem ${marksOf10Lei} bancnote de 10 lei`);


let roomTemperature = 27;
let desiredTemperature = 21;
while (roomTemperature > desiredTemperature) {
    roomTemperature -= 1;
}


let acIsOn = false;
while (!acIsOn) {                   // SAU    while (acIsOn !== true) {}
    roomTemperature += 1;
    if (roomTemperature === 35) {
        acIsOn = true;
    }
}

// DO WHILE loop   ---> NU este folosit
do {

} while (true);

// FOR loop
let marksOf5Lei = 0;
let totalOf5Lei = 5;
for (let index = 0; index < totalOf5Lei; index++) {
    marksOf5Lei += 1;
}


let countries = ['Romania', 'Bulgaria', 'Ucraina', 'Turcia'];
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}


// IF ELSE
let var1 = 5;
let var2 = '5';

//  ==      ---> verifica valoarea
//  ===     ---> verifica valoarea si tipul variabilelor
//  in cazul comparatiilor (<= sau >=), se foloseste un singur '=', deoarece se converteste tipul variabilelor automat
//  !==     ---> = diferit

if (var1 === var2) {
    console.log('Variabilele sunt egale');
} else {
    console.log('Variabilele NU sunt egale');
}


let temperature = 35;
let optimalTemperature = 21;
if (optimalTemperature < temperature) {
    console.log('Este placut afara');
} else {
    console.log('Afara este canicula');
}

// !!! a NU se folosi intr-un LOOP o conditie MEREU adevarata  => moare aplicatia
/** while (optimalTemperature < temperature) {
*      temperature += 1;
*   }
*/


/**  LOGICAL OPERATORS
 *        && ---> daca cel putin 1 conditie este FALSA = TOTUL E FALS
 *        || ---> daca cel putin 1 conditie este TRUE = TOTUL E TRUE
*/
let pizzaPrice = 40;
let hasGorgonzola = true;
if (pizzaPrice <= 30 || hasGorgonzola === true) {
    console.log('Pizza merita banii');
} else {
    console.log('Pizza NU merita banii');
}

if (pizzaPrice <= 30 && hasGorgonzola === true) {
    console.log('Pizza merita banii');
} else {
    console.log('Pizza NU merita banii');
}



/**  FUNCTIONS
 *        ---> numele functiilor TREBUIE sa fie VERBE
*/
function logSmth() {
    console.log('Functia logSmth() a fost apelata/invocata (in eng = to call a function)');
}
logSmth();
// logSmth();
// logSmth();
// logSmth();


let sum = 0;
function addToSum(number) {
    sum = sum + number;
    console.log('Rezultatul este' + sum);
}
addToSum(4);     // = Rezultatul este 4
addToSum(7);     // = Rezultatul este 11


function addToSum(number) {
    let sum = 0;
    sum = sum + number;
    console.log('Rezultatul este' + sum);
}
addToSum(4);     // = Rezultatul este 4   ---> sum = 0 + 4  => sum = 4
addToSum(7);     // = Rezultatul este 7   ---> sum = 4 + 7  => sum = 11




const removeFrom100 = function(number) {
    console.log(`Rezultatul este ${100 - number}`);
}
removeFrom100(20);     // = Rezultatul este 180   ---> removeFrom100 = 100 - 20  => removeFrom100 = 180
removeFrom100('Johnny');     // = Rezultatul este none   ---> none = not a number




function sendEmail(firstName, lastName, profession, result, exam) {
    if (profession) {
        console.log('Ai profesia ' + profession);
    }
    console.log(`Salutare ${firstName} ${lastName},
    Ai obtinut nota ${result} la examenul ${exam}.
    Mult succes mai departe, ${firstName}!`);
}
sendEmail('Klaudia', 'Anton', 'frontend developer', 10, 'capacitate');
sendEmail("Klaudia", "Anton", '', 10, "capacitate");     // ---> NU mai este executata linia de cod cu 'if'




function logNumber(number) {
    console.log(number);
}
logNumber(5);     // = 5
logNumber();     // = undefined


function logNumber(number = 10) {
    console.log(number);
}
logNumber(5);     // = 5
logNumber();     // = 10




function orderPizza(i1, i2, i3) {
    console.log(`As dori sa comand o pizza cu ${i1}, ${i2} si ${i3}`);
}
orderPizza('mozzarela', 'corn', 'mushrooms');




function doSum(a, b) {
    console.log('Suma este: ' + (a + b));
}
doSum(5, 7);     // = Suma este 12   ---> a + b = 5 + 7 
console.log(a + b);     // = undefined

// function doSum(a, b) {
//     console.log('Suma este: ' + (a + b));
//     return undefined;
//     console.log('Acest cod NU va fi luat in considerare');
// }

function doSum(a, b) {
    console.log('Suma este: ' + (a + b));
    return a + b;
    console.log('Acest cod NU va fi luat in considerare');
}

let sumResult = doSum(5, 7);
console.log(sumResult);     // = undefined




let pizzaOrdered = 0;
function doAnotherPizza(i1, i2, i3) {
    console.log('Pizza cu ' + i1 + i2 + 'si' + i3 + ' in preparare');
    // return 'Pizza a fost comandata';
    pizzaOrdered += 1;
    return pizzaOrdered;
}
const anounce = doAnotherPizza('mozzarela', 'corn', 'mushrooms');
anounce = doAnotherPizza('mozzarela', 'corn', 'mushrooms');
anounce = doAnotherPizza('mozzarela', 'corn', 'mushrooms');
console.log(anounce);