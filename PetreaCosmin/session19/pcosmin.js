function logStuff(stuff) {
  console.log(`Rezultatul este: ${stuff}`);
}

// logStuff('ceva');

let sum = 0;

function addToSum(number) {
  return (sum = sum + number);
}

addToSum(3);
addToSum(10);
let totalSum = addToSum(10);

logStuff(totalSum);
logStuff(sum);

let sumNumbers = function (number1, number2) {
  return number1 + number2;
};

let sumNumbersArrow = (number1, number2) => {
  return number1 + number2;
};

let sumTwoNumbers = sumNumbersArrow(5, 10);
logStuff(sumTwoNumbers);
logStuff(sumNumbers(1, 2));

function verifyEquality(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

logStuff(verifyEquality(2, 2));

function verifyEqualitySimplified(num1, num2) {
  return num1 === num2;
}
logStuff(verifyEqualitySimplified(2, 2));

function doubleValue(value) {
  return value * 2;
  console.log("Ceva");
}

logStuff(doubleValue(3));

function sayName(name = "Cosmin") {
  console.log(`Salut numele este ${name}`);
}
sayName();
sayName("Petrea");

// debugger; opreste executia
// f8 revine la normal
// f10 sari peste un pas
// f11 intri intr o functie

function removeFromNumbers(a, b) {
  if (a >= b) {
    return a - b;
  } else {
    return b - a;
  }
}

function verifiNumber(number) {
  if (number > 10 && number < 50) {
    return "Da";
  } else {
    return "nu este";
  }
}

logStuff(verifiNumber(15));

const verifiNumberArrow = (number) => {
  if (number > 10 && number < 50) {
    return "Da";
  } else {
    return "nu este";
  }
};

logStuff(verifiNumberArrow(15));

const puppy = {
  name: "rex",
  age: 1,
  favoriteToys: ["Duck", "Cat", "Bone"],
  bark: function () {
    console.log("HAM!");
  },
  barkLoud: () => {
    console.log("HAM!!");
  },
};
const anotherPuppy = puppy;

anotherPuppy.bark();

const yetAnotherPuppy = {
  name: "REXX",
  age: 2,
  bark() {
    console.log("HAM!!");
  },
};
anotherPuppy.name = "Rexxx";

console.log(puppy.name);

function nameDog(name) {
  return `Dog ${name}`;
}

const rex = nameDog("Rex");
console.log(rex);

const rexx = nameDog; //copiez functia si i o aloc unei variabile
console.log(rexx("Rexxxxxx"));

const menu = {
  burger: "Big Mac",
  juice: "Cola",
  size: "Big",
  "french-fries": "with salt",
};

console.log(menu["french-fries"]);

const newString = (array) => {
  let createdString = "";
  for (let i = 0; i < array.length; i++) {
    createdString += array[i];
  }
  return createdString;
};
console.log(newString([3, 5, "cosmin"]));

const reverseString = (array) => {
  let reversedString = "";
  for (let i = array.length - 1; i >= 0; i--) {
    reversedString += array[i];
  }
  return reversedString;
};
console.log(reverseString([3, 5, "cosmin"]));

const reverseArray = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

console.log(reverseArray([1, 2, 3, 4]));

const createArray = (number) => {
  //parantezele pot lipsi cand am un singur parametru
  let newArray = [];
  for (let i = 0; i < number; i++) {
    newArray.push(i);
  }
  return newArray;
};
console.log(createArray(8));

//Smart home app features

let lightsValue = false;
let acValue = false;
let windowsValue = false;
const toggleLights = () => {
  lightsValue = !lightsValue;
  if (lightsValue) {
    return "luminilie au fost aprinse";
  } else {
    return "luminile au fost stinse";
  }
};
console.log(toggleLights());
const toggleAc = () => {
  acValue = !acValue;
  if (acValue) {
    return "ac-ul fost pornit";
  } else {
    return "ac-ul a fost oprit";
  }
};
// toggleAc();
// console.log(toggleAc());

const smoke = () => {
  console.log("Smoking...");
  if (!windowsValue) {
    toggleWindows();
  }
  if (acValue) {
    toggleAc();
  }
};

const toggleWindows = () => {
  windowsValue = !windowsValue;
  if (windowsValue) {
    return "Geamurile au fost deschise";
  } else {
    return "Geamurile au fost inchise";
  }
};
toggleWindows();

let musicValue = false;
const playMusic = (song = "Metallica") => {
  console.log(`PLaying.. ${song}`);
};

// HOMEWORKKKK

let smokeSensor = false;
let alarm = false;
const smokeAlarm = () => {
  smokeSensor = !smokeSensor;
  if (smokeSensor === false) {
    console.log(`Senzorul de alarma functioneaza si totul este in regula.`);
  }
  if (smokeSensor) {
    console.log(`Senzorul de alarma a detectat fum`);
    let alarm = true;
    console.log(`Alarma a pornit si a fost apelat serviciul de urgente.`);
  }
};
smokeAlarm();
smokeAlarm();

let current = new Date();
let doorUnlocked = false;

const welcomeHome = () => {
  doorUnlocked = !doorUnlocked;
  if (doorUnlocked) {
    let clocktime = current.getHours();
    if (clocktime > 17) {
      console.log("Se aprind luminile");
    }
    console.log(`Welcome home boss!`);
    console.log(toggleAc());
    playMusic();
  } else {
    console.log("Door is locked and nothing will happen.");
  }
};

welcomeHome();
welcomeHome();

let ownerLeftHouse = false;
const leaveHouse = () => {
  ownerLeftHouse = !ownerLeftHouse;
  if (ownerLeftHouse) {
    window.acValue = true; // am vrut sa redeclar variabila globala in scope ul din functie si am citit ca ar functiona cu window si chiar a mers.
    window.windowsValue = true;
    window.lightsValue = true;
    console.log(toggleAc());
    console.log(toggleWindows());
    console.log(toggleLights());
  } else {
    console.log(
      `Owner is inside the house and he is the boss and i can't do nothing.`
    );
  }
};
leaveHouse();
leaveHouse();
