const demoBoxElement = document.getElementById('testBox');
console.log(demoBoxElement);
console.dir(demoBoxElement);

demoBoxElement.className = 'red';
console.dir(demoBoxElement);

demoBoxElement.className = '';

demoBoxElement.classList.add('blue');
demoBoxElement.classList.remove('blue');
demoBoxElement.classList.toggle('blue');




// Get or Set Attribute
const demoImgElement = document.getElementById('demoImg');
const newImgElement = document.getElementById('newImg');

const imgSrc = demoImgElement.getAttribute('src');
// console.log(imgSrc);

newImgElement.setAttribute('src', imgSrc);
newImgElement.setAttribute('src', 'https://images.luxuryhotel.guru/hotelimage.php?p_id=3016855&code=4638a0f4ad3d6c965ff2bbe1634d8d0c&webpage=small-luxury-hotels.net&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F512x384%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1536%2F181014345.jpg%3Fk%3D3925ab6b7bd4d4e952aabff07e4db17f9ced79efe08e1940c705d97b126ef756%26o%3D');




// Event Listeners
const unListElement = document.getElementsByTagName('ul')[0];
let listItemsElements = document.querySelectorAll('li');

unListElement.addEventListener('click', () => {
    unListElement.classList.toggle('blue');
});

for (let i = 0; i < listItemsElements.length; i++) {
    const listElement = listItemsElements[i];
    // console.log(listElement);
    listElement.addEventListener('mouseover', function () {
        // console.log(this);
        this.classList.add('red');
    });
    listElement.addEventListener('mouseout', function () {
        this.classList.remove('red');
    });
    // listElement.addEventListener('mouseout', () => {
    //     console.log(this);
    // });
    listElement.addEventListener('click', toggleListItems);
}

function toggleListItems() {
    const toggleValue = this.classList.toggle('red');
    console.log(toggleValue);
    if (toggleValue) {
        const span = document.createElement('span');
        span.innerHTML = 'RM';
        this.appendChild(span);
    } else {
        this.getElementsByTagName('span')[0].remove();
        this.remove();
    }
}
// ---> "this" NU functioneaza daca functia este una de tip arrow function


const clickMeElement = document.getElementById('clickMe');
clickMeElement.style.cursor = 'pointer';
// document.getElementById('clickMe').style.cursor = 'pointer';

const demoInputElement = document.getElementById('demoInput');
demoInputElement.addEventListener('keypress', function (event) {
    // console.log(event);
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
    } else {
        newListElement.innerHTML = 'elem ' + listItemsElements.length;
    }
})






const toDoInputElem = document.getElementById('toDoInput');
const addButtonElem = document.getElementsByClassName('addButton')[0];
const toDoListElem = document.getElementsByClassName('toDoListItems')[0];

addButtonElem.addEventListener('click', function () {
    const canAdd = checkPlan();
    if (canAdd) {
        if (toDoInputElem.value) {
            const newListItem = document.createElement('li');
            newListItem.className = 'newListItems';
            newListItem.addEventListener('dbclick', function () {
                this.remove();
        });

        toDoListElem.appendChild(newListItem);
        newListItem.innerHTML = toDoInputElem.value;
        toDoInputElem.value = '';
    } else {
            alert('Te rugam sa introduci o valoare');
            console.log('actiune dupa alerta');
        }
    } else {
        alert('Te rugam sa treci la un plan premium');
        // promt('please enter your name', 'Harry Potter');
        // confirm('press the button');
    }
    
});

function checkPlan() {
    const newListItemsNumber = document.getElementsByClassName('newListItems');
    return newListItemsNumber < 3;
}