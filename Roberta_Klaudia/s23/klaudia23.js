/**  RegExp - Regular Expressions
 *           ---> tipare ce cauta anumite conbinatii in STRING-uri
*/
let string = 'zzzabcdef';
let pattern = /ab/;
console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));


const submitBtn = document.getElementById('login');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const error = document.querySelector('#error');

const validatePassword = (value) => {
    // if (value === 'password') {
    //     return true;
    // } else {
    //     return false;
    // }
//          SAU
    return value === 'password';
}

const validateEmail = (value, regexp) => {
    // if (value.test(regex)) {
    //     return true;
    // } else {
    //     return false;
    // }

    //         SAU
    // return value.test(regexp);

    //         SAU
    return !!value.test(regexp);   // ---> forteaza valoarea  
    // const test = 'test';
    // console.log(test);
    // console.log(!test);
    // console.log(!!test);
}

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    console.log(emailValue);
    console.log(passwordValue);
    const regexpEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;
    if (emailValue === '' || passwordValue === '') {
        error.style.display = 'block';
        error.innerHTML = 'All fields are required and must have a value';
        error.style.color = 'red';
    } else {
        if (validatePassword(passwordValue) && validateEmail(emailValue, regexpEmailPattern)) {
            error.style.display = 'none';
            alert('Logged in');
            emailField.value = '';
            passwordField.value = '';
        } else {
            alert('Try again');
            error.style.display = 'block';
            error.style.color = 'red';
            error.innerHTML = 'Incorrect email or password';
            emailField.value = '';
            passwordField.value = '';
        }
    }
});




// REMINDER
let variabila = 'awsd';
function testScoping(variabila) {
    variabila = 'ceva';
    console.log(variabila);
}
testScoping(variabila);
console.log(variabila);




const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const ageField = document.getElementById('age');

const firstName = 'Klaudia';
const lastName = 'Anton';
const age = 21;

// firstNameField.value = firstName;
// lastNameField.value = lastName;
// ageField.value = age;


// BUILD IN FUNCTIONS

// 1. setTimeout ---> executa o functie pe care o primeste ca prim parametru, o singura data, dupa o anumita perioada de timp.

//                             metoda 1
// setTimeout(() => {                 
//     firstNameField.value = firstName;
//     lastNameField.value = lastName;
//     ageField.value = age;
// }, 5000);

//                             metoda 2
// setTimeout(() => {
//     setFields();
// }, 2000);

// alert('Opreste executia');


function setFields() {
    firstNameField.value = firstName;
    lastNameField.value = lastName;
    document.getElementById('age').value = age;
}

//                             metoda 3
// setTimeout(setFields, 2000);      
// ---> NU se pun parantezele rotunde de la functia cu rol de prim parametru
// explicatie pt care nu se pun parantezele rotunde
function myFunction() {
    console.log('rolul parantezelor');
    // return 'rolul parantezelor';
}

const function2 = () => {
    return 'rolul parantezelor';
}

const newFunction = myFunction();
const anotherFunction = myFunction;

console.log(newFunction);
console.log(anotherFunction);
console.log(anotherFunction());



// 2. setInterval ---> apeleaza o functie de mai multe ori cu frecventa intervalului mentionat
let start = 1;
const interval = setInterval(() => {
    console.log(start);
    start += 1;
    if (start === 7) {
        setFields();
        clearInterval(interval);
    }
}, 2000);