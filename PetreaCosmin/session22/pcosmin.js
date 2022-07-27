const demoBoxElement = document.getElementById("testBox");
console.log(demoBoxElement);
console.dir(demoBoxElement);

demoBoxElement.className = "red";
console.dir(demoBoxElement);
demoBoxElement.className = "";

demoBoxElement.classList.add("blue");
demoBoxElement.classList.remove("blue");
demoBoxElement.classList.toggle("blue");

// Get or Set attributes

const demoImageElement = document.getElementById("demoImage");
const newImageElement = document.getElementById("newImage");

const imgSrc = demoImageElement.getAttribute("src");
newImageElement.setAttribute("src", imgSrc);
newImageElement.setAttribute(
  "src",
  "https://www.rjontour.com/wp-content/uploads/2021/01/Black-Church-From-Brasov-Main-Square-1024x768.jpg"
);

console.dir(newImageElement);

//Event listeners

const unlistElement = document.getElementsByTagName("ul")[0];
let listItemsElements = document.querySelectorAll("li");

// unlistElement.addEventListener("click", () => {
//   unlistElement.classList.toggle("blue");
// });

for (let i = 0; i < listItemsElements.length; i++) {
  const listElement = listItemsElements[i];
  console.log(listElement);
  //   listElement.addEventListener("mouseover", function () {
  //     this.classList.add("red");
  //   });
  //   listElement.addEventListener("mouseout", function () {
  //     this.classList.remove("red");
  //   });
  listElement.addEventListener("click", toggleListItems);
}

function toggleListItems() {
  const toggleValue = this.classList.toggle("red");
  console.log(toggleValue);
  if (toggleValue) {
    const span = document.createElement("span");
    span.innerHTML = " x";
    this.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove();
    this.remove();
  }
}

const clickMeElement = document.getElementById("clickMe");
clickMeElement.style.cursor = "pointer";

const demoInputElement = document.getElementById("demoInput");
demoInputElement.addEventListener("keypress", function (event) {
  console.log(event);
  if (event.keyCode === 13 && demoInputElement.value.length > 3) {
    demoInputElement.style.background = "green";
    console.log(demoInputElement.value);
    console.log(demoInputElement.value.length);
  }
});

clickMeElement.addEventListener("click", function () {
  const newListElement = document.createElement("li");
  unlistElement.appendChild(newListElement);
  listItemsElements = document.querySelectorAll("li");
  if (demoInputElement.value) {
    newListElement.innerHTML = demoInputElement.value;
  } else {
    newListElement.innerHTML = "Elem " + listItemsElements.length;
  }
  for (let i = 0; i < listItemsElements.length; i++) {
    const listElement = listItemsElements[i];
    listElement.addEventListener("click", toggleListItems);
  }
});

const toDoInputElement = document.getElementById("toDoInput");
const addButtonElement = document.getElementsByClassName("addButton")[0];
const toDoListElement = document.getElementsByClassName("toDoListItems")[0];

addButtonElement.addEventListener("click", function () {
  if (checkPlan()) {
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
      alert("Te rugam sa introduci o valoare");
    }
  } else {
    alert("S-a atins numarul maxim de task uri");
  }
});

function checkPlan() {
  const newListItemsNumber = document.getElementsByClassName("newListItems");
  console.log(newListItemsNumber);
  return newListItemsNumber.length < 3;
}

/** RegExp- Regular expressions
 * tipare care cauta anumite combinatii in string uri
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
  // if (value === "password") return true;
  // else return false;
  return value === "password";
};
const validateEmail = (value, regex) => {
  return !!value.match(regex); //Forteaza o valoare sa fie booleana
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
    //Validate email
    //validate password
    if (
      validatePassword(passwordValue) &&
      validateEmail(emailValue, regexEmailPattern)
    ) {
      error.style.display = "none";
      alert("Logged in ");
      emailField.value = "";
      passwordField.value = "";
    } else {
      alert("try again");
      error.innerHTML = "Incorect email or password";
      emailField.value = "";
      passwordField.value = "";
    }
  }
});
const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");
const ageField = document.getElementById("age");

const firstName = "Angelina";
const lastName = "Jolie";
const age = 27;
// firstNameField.value = firstName;
// lastNameField.value = lastName;
// ageField.value = age;

/**Built in functions
 */
//setTimeout executa o functie pe care o primeste ca si prim parametru, o singura data ,dupa o anumita perioada de timp

// setTimeout(() => {
//   firstNameField.value = firstName;
//   lastNameField.value = lastName;
//   ageField.value = age;
// }, 7000);

function setFields() {
  firstNameField.value = firstName;
  lastNameField.value = lastName;
  document.getElementById("age").value = age;
}

// setTimeout(setFields, 4000);

// function myFunction() {
//   return "Rolul parantezelor";
// }

// const myFunction2 = () => {
//   return "Rolul parantezelor";
// };

// const newFunction = myFunction();
// const anotherFunction = myFunction;

// console.log(myFunction());
// console.log(anotherFunction);
// console.log(anotherFunction());

/**Set Interval
 * setInterval();
 * apeleaza o functie de mai multe ori cu frecventa intervalului mentionat
 */

let start = 1;
const interval = setInterval(() => {
  console.log(start);
  start += 1;
  if (start == 7) {
    setFields();
    clearInterval(interval);
  }
}, 2000);

const person = {
  name: "Cosmin",
  age: 23,
};
const employee = person;
console.log(person);
console.log(employee);

employee.name = "Andrei";
console.log(person);
console.log(employee);

let whaterver = person.name;
whaterver = "rares";

console.log(whaterver);
console.log(person);
