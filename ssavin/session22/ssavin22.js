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

const unListElement = document.getElementsByTagName('ul')[0];
let listItemsElements = document.querySelectorAll('li');

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
// document.getElementById("clickMe").style.cursor = 'pointer';
clickMeElement.style.cursor = 'pointer';

const demoInputElement = document.getElementById('demoInput');

demoInputElement.addEventListener('keypress', function (event) {
    // console.log(event);
    if (event.keyCode === 13 && demoInputElement.value.length > 3) {
        demoInputElement.style.background = 'green';
        console.log(demoInputElement.value);
        console.log(demoInputElement.value.length);
    }
});

clickMeElement.addEventListener('click', function() {
    const newListElement = document.createElement('li');

    unListElement.appendChild(newListElement);
    listItemsElements = document.querySelectorAll('li');
    if (demoInputElement.value) {
        newListElement.innerHTML = demoInputElement.value;
        demoInputElement.value = '';
    } else {
        newListElement.innerHTML = 'Elem ' + listItemsElements.length;
    }
});

const toDoInputElement = document.getElementById('toDoInput');
const addButtonElement = document.getElementsByClassName('addButton')[0];
const toDoListElement = document.getElementsByClassName("toDoListItems")[0];

addButtonElement.addEventListener('click', function() {
    if (toDoInputElement.value) {
        const newListItem = document.createElement('li');
        newListItem.className = "newListItems";
        newListItem.addEventListener('dblclick', function() {
            this.remove();
        });

        toDoListElement.appendChild(newListItem);
        newListItem.innerHTML = toDoInputElement.value;
        toDoInputElement.value = '';
    }
});

function checkPlan() {
    const newListItemsNumber = document.getElementsByClassName('newListItems');

    return newListItemsNumber < 3;
}

