const demoBoxElement = document.getElementById('testBox');

console.log(demoBoxElement);
console.dir(demoBoxElement);

demoBoxElement.className = 'red';
demoBoxElement.className = ''

demoBoxElement.classList.add('blue');
demoBoxElement.classList.remove('blue');
demoBoxElement.classList.toggle('blue'); // schimba starea


// Get or set attributes

const demoImageElement = document.getElementById('demoImage');
const newImageElement = document.getElementById('newImage');

const imgSrc = demoImageElement.getAttribute('src');
newImageElement.setAttribute('src', imgSrc);
newImageElement.setAttribute(
    'src',
    'https://www.pentalog.com/wp-content/uploads/2019/11/move-to-brasov.jpg'
);

/**
 * Event listeners
 */

const unListElement = document.getElementsByTagName('ul')[0];
let listItemsElements = document.querySelectorAll('li');

// unListElement.addEventListener('click', () => {
//     unListElement.classList.toggle('blue');
// })

for (let i = 0; i < listItemsElements.length; i++) {
    const listElement = listItemsElements[i];
    // console.log(listElement);
    // listElement.addEventListener('mouseover', function () {
    //     this.classList.add('red');
    // });
    // listElement.addEventListener('mouseout', function () {
    //     this.classList.remove('red');
    // });

    listElement.addEventListener('click', toggleListItems);

}

function toggleListItems() {
    const toggleValue = this.classList.toggle('red');
    console.log(toggleValue);
    if (toggleValue) {
        const span = document.createElement('span');
        span.innerHTML = 'x';
        this.appendChild(span);
    } else {
        this.getElementsByTagName('span')[0].remove();
        this.remove();

    }
}

const clickMeElement = document.getElementById('clickMe');
// document.getElementById('clickMe').style.cursor = 'pointer';
clickMeElement.style.cursor = 'pointer';

const demoInputElement = document.getElementById('demoInput');

demoInputElement.addEventListener('keypress', function (event) {
    console.log(event);

    if (event.keyCode === 13 && demoInputElement.value.length > 3) {
        demoInputElement.style.background = 'green';
        console.log(demoInputElement.value);
        console.log(demoInputElement.value.length);
    }
});


clickMeElement.addEventListener('click', function () {
    const newListElement = document.createElement('li');
    unListElement.appendChild(newListElement);
    listItemsElements = document.querySelectorAll('li');
    if (demoInputElement.value) {
        newListElement.innerHTML = demoInputElement.value;
        demoInputElement.value = '';
        newListElement.addEventListener('click', toggleListItems); // TEMA = ADD EVENT LISTENER
    } else {
        newListElement.innerHTML = 'Elem ' + listItemsElements.length;
        newListElement.addEventListener('click', toggleListItems); // TEMA = ADD EVENT LISTENER
    }
})


const toDoInputElement = document.getElementById('toDoInput');
const addButtonElement = document.getElementsByClassName('addButton')[0];
const toDoListElement = document.getElementsByClassName('toDoListItems')[0];

addButtonElement.addEventListener('click', function () {
    const canAdd = checkPlan();
    if (canAdd) {
        if (toDoInputElement.value) {
            const newListItem = document.createElement('li');
            newListItem.className = 'newListItems';
            newListItem.addEventListener('dblclick', function () {
                this.remove();
            })

            toDoListElement.appendChild(newListItem);
            newListItem.innerHTML = toDoInputElement.value;
            toDoInputElement.value = '';

        } else {
            alert("Introdu valoare");
            console.log('Actiune dupa alerta');
        }
    } else {
        // alert('Te rugam sa treci la un plan tarifar premium/superior');
        //prompt("please ente name","Harrypotter");
        //confirm('press button');
    }

});

function checkPlan() {

    const newListItemsNumber = document.getElementsByClassName('newListItems').length;
    return newListItemsNumber < 3;
}

/**
 * Regexp
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
    return value === 'password';
}

const validateEmail = (value, regex) => {

    return !!value.match(regex); // !! forteaza o valoare sa fie booleana
    // const testt = 'test';
    // console.log(testt);
    // console.log(!testt);
    // console.log(!!testt);
}

submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // anuleaza default-ul
    // console.log(event);
    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

    if (emailValue === '' || passwordValue === '') {
        error.style.display = 'block';
        error.innerHTML = 'All fields are rquired and must have a value';
        error.style.color = 'red';
    } else {
        //Validate password
        //Validate email

        if (validatePassword(passwordValue) && validateEmail(emailValue, regexEmailPattern)) {
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

let variabila = 'asd';

function testScoping(variabila) {
    variabila = 'ceva';
    console.log(variabila);
}


testScoping(variabila); // ceva
console.log(variabila); // asd


const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const ageField = document.getElementById('age');

const firstName = 'Angelina';
const lastName = 'Jolie';
const age = 27;

// firstNameField.value = firstName;
// lastNameField.value = lastName;
// ageField.value = age;


/**
 * Built in fuctions
 */
// setTimeout executa o functie pe care o primeste ca prim parametru, o singura data, dupa o anumita perioada de dimp
// setTimeout(() => {
//     firstNameField.value = firstName;
//     lastNameField.value = lastName;
//     ageField.value = age;
// },2000); 
// se executa dupa ce se incarca tot codul + o periada de timp daca dau si al 2-lea parametru.

function setfields() {
    firstNameField.value = firstName;
    lastNameField.value = lastName;
    document.getElementById('age').value = age;
}

// setTimeout(setfields, 2000); // dupa 2 secunde apeleaza referinta!!!!

function myFunction() {
    return 'Rolul parantezelor';// return implicit undefined daca nu e pus
}
const myFunction2 = () => {
    return 'Rolul parantezelor'
}

const newFunction = myFunction();
const anotherFunction = myFunction;

console.log(newFunction);
console.log(anotherFunction);

/**
 * setInterval
 * apeleaza o functie de mai multe ori cu frecventa intervalului mentionat
 */

let start = 1;
const interval = setInterval(() => {
    console.log(start);
    start += 1;
    if (start === 7) {
        setfields();
        clearInterval(interval);
    }
}, 1000);