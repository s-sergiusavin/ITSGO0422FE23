const demoBoxElement = document.getElementById("testBox");

console.log(demoBoxElement);
console.dir(demoBoxElement);

demoBoxElement.className = "red";
demoBoxElement.className = "";

demoBoxElement.classList.add("blue");
demoBoxElement.classList.remove("blue");
demoBoxElement.classList.toggle("blue");

// Get or set attributes

const demoImageElement = document.getElementById("demoImage");
const newImageElement = document.getElementById("newImage");

const imgSrc = demoImageElement.getAttribute("src");
newImageElement.setAttribute("src", imgSrc);
newImageElement.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1572805645502-c6cf9bdbbc77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2x1aiUyMG5hcG9jYSUyQyUyMHJvbWFuaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
);

/**
 * Event listeners
 */

const unListElement = document.getElementsByTagName("ul")[0];
let listItemsElements = document.querySelectorAll("li");

// unListElement.addEventListener('click', () => {
//     unListElement.classList.toggle('blue');
// });

for (let i = 0; i < listItemsElements.length; i++) {
  const listElement = listItemsElements[i];
  // listElement.addEventListener('mouseover', function () {
  //     this.classList.add('red');
  // });
  // listElement.addEventListener("mouseout", function () {
  //     this.classList.remove('red');
  // });
  listElement.addEventListener("click", toggleListItems);
}

function toggleListItems() {
  const toggleValue = this.classList.toggle("red");
  console.log(toggleValue);
  if (toggleValue) {
    const span = document.createElement("span");
    span.innerHTML = "x";
    this.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove();
    this.remove();
  }
}

const clickMeElement = document.getElementById("clickMe");
// document.getElementById("clickMe").style.cursor = 'pointer';
clickMeElement.style.cursor = "pointer";

const demoInputElement = document.getElementById("demoInput");

demoInputElement.addEventListener("keypress", function (event) {
  // console.log(event);
  if (event.keyCode === 13 && demoInputElement.value.length > 3) {
    demoInputElement.style.background = "green";
    console.log(demoInputElement.value);
    console.log(demoInputElement.value.length);
  }
});

clickMeElement.addEventListener("click", function () {
  const newListElement = document.createElement("li");

  unListElement.appendChild(newListElement);
  listItemsElements = document.querySelectorAll("li");
  if (demoInputElement.value) {
    newListElement.innerHTML = demoInputElement.value;
    demoInputElement.value = "";
  } else {
    newListElement.innerHTML = "Elem " + listItemsElements.length;
  }
});

const toDoInputElement = document.getElementById("toDoInput");
const addButtonElement = document.getElementsByClassName("addButton")[0];
const toDoListElement = document.getElementsByClassName("toDoListItems")[0];

addButtonElement.addEventListener("click", function () {
  const canAdd = checkPlan();
  //   if (checkPlan()) {
  if (canAdd) {
    if (toDoInputElement.value) {
      const newListItem = document.createElement("li");
      newListItem.className = "newListItems";
      newListItem.addEventListener("dblclick", function () {
        this.remove();
      });

      toDoListElement.appendChild(newListItem);
      newListItem.innerHTML = toDoInputElement.value;
      toDoInputElement.value = "";
    } else {
      alert("Te rugam sa introduci o valoare!");
      console.log("Actiune dupa alerta");
    }
  } else {
    alert("Te rugam sa treci la un plan tarifer premium/superior");
    // prompt("Please enter your name", "Harry Potter");
    // confirm("Press a button!");
  }
});

function checkPlan() {
  const newListItemsNumber =
    document.getElementsByClassName("newListItems").length;

  return newListItemsNumber < 3;
}

/**
 * RegExp - Regular Expressions
 * tipare care cauta anumite combinatii in stringuri
 */

let string = "zzzabcdef";
let pattern = /ab/;

console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

const submitBtn = document.getElementById("login");
const emailField = document.querySelector("#email");
const passwordField = document.querySelector("#password");
const error = document.querySelector("#error");

const validatePassword = (value) => {
  // if (value === 'password') {
  //     return true;
  // } else {
  //     return false;
  // }

  return value === "password";
};

const validateEmail = (value, regex) => {
  // if (value.match(regex)) {
  //     return true;
  // } else {
  //     return false;
  // }
  return !!value.match(regex); // !! forteaza o valoare sa fie booleana
  //   const testt = "test";
  //   console.log(testt);
  //   console.log(!testt);
  //   console.log(!!testt);
};

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = emailField.value;
  const passwordValue = passwordField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  if (emailValue === "" || passwordValue === "") {
    error.style.display = "block";
    error.innerHTML = "All fields are required and must have a value";
    error.style.color = "red";
  } else {
    // Validate email
    // Validate password

    if (
      validatePassword(passwordValue) &&
      validateEmail(emailValue, regexEmailPattern)
    ) {
      error.style.display = "none";
      alert("Logged in");
      clearLoginInputs();
    } else {
      alert("Try again");
      error.style.display = "block";
      error.style.color = "red";
      error.innerHTML = "Incorrect email or password";
      clearLoginInputs();
    }
  }
});

function clearLoginInputs() {
    emailField.value = "";
    passwordField.value = "";
}

let variabila = 'asd';
function testscoping(variabila) {
    variabila = 'ceva';
    console.log(variabila);
}

testscoping(variabila);
console.log(variabila);

const firstNameField = document.getElementById('firstName');
const lastNameField = document.getElementById('lastName');
const ageField = document.getElementById("age");

const firstName = 'Angelina';
const lastName = 'Jolie';
const age = 27;

// firstNameField.value = firstName;
// lastNameField.value = lastName;
// ageField.value = age;


/**
 * Built in functions
 */

/**
 * setTimeout
 */

// setTimeout executa o functie pe care o primeste ca prim parametru, o singura data, dupa o anumita perioada de timp

// setTimeout(() => {
//     firstNameField.value = firstName;
//     lastNameField.value = lastName;
//     ageField.value = age;
// }, 5000);

// setTimeout(() => {
//     setFields();
// }, 2000);

// alert('Oprezeste executia');

function setFields() {
    firstNameField.value = firstName;
    lastNameField.value = lastName;
    document.getElementById("age").value = age;
}

// setTimeout(setFields, 2000);

function myFunction() {
    console.log("Rolul parantezelor");
    // return 'Rolul parantezelor';
}

const myFunction2 = () => {
    return 'Rolul parantezelor';
}

const newFunction = myFunction();
const anotherFunction = myFunction;

console.log(newFunction);
console.log(anotherFunction);
console.log(anotherFunction());

/**
 * setInterval
 * apelaza o functie de mai multe ori cu frecventa intervalului mentionat
 */

let start = 1;
const interval = setInterval(() => {
    console.log(start);
    start += 1;
    // start = start + 1;
    if (start === 7) {
        setFields();
        clearInterval(interval);
    }
}, 2000);

const person = {
    name: 'Sergiu',
    age: 30
}

const employee = person;
console.log(person);
console.log(employee);

employee.name = 'Andrei';
console.log(person);
console.log(employee);

let whatever = person.name;
console.log(whatever);
console.log(person);
whatever = 'Rares';
console.log(whatever);
console.log(person);



