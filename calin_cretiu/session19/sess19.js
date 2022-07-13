//                                  tema: 3-4 features la smart home, cu state

function logSstuff(styff) {
  console.log("rez este ", styff);
}

let sum = 0;

function addToSum(number) {
  return (sum += number);
}

addToSum(3);
addToSum(10);

let totalSum = addToSum(10);
logSstuff(totalSum);

let sumNumbers = function (n1, n2) {
  return n1 + n2;
};
//                                          sau cu arrow Function
let sumNumbersArrow = (n1, n2) => n1 + n2;

let sumTwoNumbers = sumNumbersArrow(5, 10);

logSstuff(sumTwoNumbers);
logSstuff(sumNumbers(1, 2));

function verifyEquality(n1, n2) {
  if (n1 === n2) {
    return true;
  } else {
    return false;
  }
}

logSstuff(verifyEquality(2, 2));

const verifiyEqualitySimplified = (n1, n2) => n1 === n2;

function doubleValue(value) {
  return value * 2;
  console.log("ceva");
}
logSstuff(doubleValue(3));

function sayHello(nume = "Calin") {
  console.log("Hello ", nume);
}
sayHello();
sayHello("Robert");

function removeFromNumbers(a, b) {
  //                                      Debugger
  //F8 revine la normal
  //F10 sare un pas
  //F11 intri in functie
  //   debugger;
  if (a >= b) {
    return a - b;
  } else {
    return b - a;
  }
}

logSstuff(removeFromNumbers(5, 7));
logSstuff(removeFromNumbers(5, 4));

function verifyNumberRange(n) {
  if (n < 50 && n > 10) {
    return "da";
  } else {
    return "nem";
  }
}
logSstuff(verifyNumberRange(80));
logSstuff(verifyNumberRange(30));

const verifyArrow = (n) => {
  if (n < 50 && n > 10) {
    return "da";
  } else {
    return "nem";
  }
};

const puppy = {
  name: "Echo",
  age: 1,
  favToys: ["Duck", "Cat", "Mouse"],
  bark: function () {
    console.log("Woof");
  },
};

const anotherPuppy = puppy;
anotherPuppy.bark();

const yetAnotherPuppy = {
  name: "Milla",
  bark() {
    console.log("Bark");
  },
  age: 2,
};

anotherPuppy.name = "Rexxx";
console.log(anotherPuppy.name);

function nameDog(name) {
  return `Dog ${name}`;
}

const rex = nameDog("Rex");
console.log(rex);
const rexx = nameDog;
console.log(rexx("Rexxx"));

const menu = {
  burger: "Big Mac",
  juice: "Cola",
  size: "Big",
  "french-fries": "With Salt",
};

console.log(menu.burger);
console.log(menu["french-fries"]);

const createString = (array) => {
  let result = " ";
  for (let i = 0; i < array.lenght; i++) {
    result += array[i];
  }
  return result;
};

console.log(createString([3, "5", 7, 2, 1]));

const inverseString = (array) => {
  let result = " ";
  for (let i = array.lenght - 1; i >= 0; i--) {
    result += array[i];
    console.log("12");
  }
  return result;
};

console.log(inverseString([4, 23, 54, 1]));
console.log("asd");

const reverseArray = (array) => {
  let newArray = [];
  for (let i = array.lenght - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};
console.log([1, 3, "4"]);

const createArray = (number) => {
  let newArray = [];
  for (let i = 0; i <= number; i++) {
    newArray.push(i.toString());
  }
  return newArray;
};

console.log(createArray(8));

let lightsOn = false;
const toggleLights = () => {
  lightsOn = !lightsOn;
  if (lightsOn) {
    return "Luminile sunt aprinse";
  } else {
    return "Luminile s-au stins";
  }
};

let acOn = false;
const toggleAc = () => {
  acOn = !acOn;
  if (acOn) {
    return "AC e pornit";
  } else {
    return "AC s-a stins";
  }
};

let curtainsValue = true;
const toggleCurtains = () => {
  acOn = !curtainsValue;
  if (acOn) {
    return "Curtains are down";
  } else {
    return "Curtains are up";
  }
};

let windowsValue = false;
const toggleWindows = () => {
  acOn = !windowsValue;
  if (acOn) {
    return "Windows are down";
  } else {
    return "Windows are up";
  }
};

const smoke = () => {
  console.log("Smoking... ");
  if (!windowsValue) {
    toggleWindows();
  }
  if (acOn) {
    toggleAc();
  }
};

console.log(toggleLights());
console.log(toggleAc());
console.log(toggleCurtains());
console.log(toggleWindows());
smoke();

let musicOn = false;
const playMusic = (song = "Un hit Celine Dion") => {
  musicOn = !musicOn;
  return `Music is ${musicOn ? "on" : "off"}; Now playing ${song}`;
};

// ________________________________________________________________________Homework_____________________________________

let myHouse = {
  houseLocked: true,
  garageDoorOpen: false,
  carInGarage: false,
  cameras: true,
  houseTemp: 23,
  lightsColor: "warm",
  persons: {
    Alice: { name: "Alice", lightsColor: "warm" },
    Bob: { name: "Bobbie", lightsColor: "cold" },
  },
};

let ownerCarArrived = true;
let parkingOperationDone = false;
let garageDoorHandler = (isOwnerHere) => {
  if (isOwnerHere && myHouse.carInGarage) {
    console.log("Garage full!");
  }
  if (isOwnerHere && !myHouse.carInGarage) {
    console.log("Opening garage door...");
    myHouse.garageDoorOpen = true;
    parkingOperationDone = true;
    console.log("Parking done");
    let parkingSuccess = true;
    if (parkingSuccess) {
      myHouse.garageDoorOpen = false;
      myHouse.carInGarage = true;
      console.log("Operation complete");
    } else {
      myHouse.carInGarage = true;
      console.log("call insurance and house repairs");
    }
  }
};
garageDoorHandler(ownerCarArrived);

function toggleHouseLocks(status = true) {
  myHouse.houseLocked = status;
  console.log("House is now ", myHouse.houseLocked ? "locked" : "open");
}
toggleHouseLocks();

function setLights(person, style) {
  if (style) {
    myHouse.lightsColor = style;
    myHouse.persons[person].lightsColor = style;
    console.log("Lights set, new lights preset added to: ", person);
  } else {
    if (myHouse.persons[person]) {
      myHouse.lightsColor = myHouse.persons[person];
      console.log(`Welcome ${person}!`);
    } else {
      myHouse.persons[person].lightsColor = "warm";
      console.log("New user added, with default lights theme");
    }
  }
}

let person = "Bob";
setLights(person, "blue");
if (person === "Bob") {
  console.log(
    `${myHouse.persons["Bob"].name}'s lights set to ${myHouse.persons["Bob"].lightsColor}`
  );
}
