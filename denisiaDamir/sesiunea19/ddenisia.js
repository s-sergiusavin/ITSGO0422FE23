function logStuff(stuff){
    console.log(`Rezultatul este: ${stuff}`);
};


let sum = 0;

function addToSum (number){
   return sum = sum + number;
   //return sum += number;
};

addToSum(3);
// addToSum(10);
logStuff(addToSum(10));
let totalSum = addToSum(10);

logStuff(totalSum);
logStuff(sum);

let sumNumbers = function(number1, number2){
    return number1 + number2;
};

let sumNumbersArrow = (number1, number2) => {
    return number1 + number2;
} ;

let sumTwoNumbers = sumNumbersArrow(5, 10);
logStuff(sumTwoNumbers);
logStuff(sumNumbers(1, 2));

function verifyEquality(num1, num2){
    if(num1 === num2){
        return true;
    } else {
        return false;
    }
};

function verifyEqualitySimplified(num1, num2){
    return num1 === num2;
}
logStuff(verifyEquality(2, 2));

function doubleValue(value){
    return value * 2; 
    console,log('ceva');
}
logStuff(doubleValue(3));

function sayName (name =`Lucian`){
    console.log(`Salut ${name}`);
    //console.log('Salut ' + name);
};

sayName();
sayName('Robert');


// debugger; opreste executia
// F8 revine la normal
// F10 sari peste un pas
// F11 intri intr o functie 

function removeFromNumbers (a, b){
   // debugger;
    if (a >= b){
        return a - b;
    }else {
        return b - a;
    }
};
logStuff(removeFromNumbers(5, 7));
logStuff(removeFromNumbers(5, 4));
logStuff(removeFromNumbers(5, 5));

function verifyNumber (number){
    if (number > 10 && number < 50 ){
        return 'da' ;
    } else{
        return 'nu';

    }
};

const verifyNumberArrow = (number) =>{
    if (number > 10 && number < 50 ){
        return 'da' ;
    } else{
        return 'nu';

    }
};
logStuff(verifyNumber(80));
logStuff(verifyNumber(10.5));


const puppy ={
    name : "Rex",
    age : 1,
    favouriteToys :['duck', 'cat', 'bone'],
    barck : function () {
        console.log('ham!');

    },
    barckLoud:() => {
        console.log('HAM!');
    }
};
const anotherPuppy = puppy;
const yetAnotherPuppy = {
    name: "Rexx",
    barck(){
        console.log('ham')
    },
    age: 2
};

anotherPuppy.barck();
console.log(anotherPuppy.name);
anotherPuppy.name = 'rexxx';
console.log(anotherPuppy.name);
console.log(puppy.name);

function nameDog (name){
    return  `Dog ${name}` ;
};

const rex = nameDog ('rex');
console.log(rex);

const rexx = nameDog;
 // const rexx = (name) => {
    //return  `Dog ${name}` ;
    //}
console.log(rexx('rexxx'));

const menu ={
    burger: 'big mac',
    juice: 'cola',
    size: 'big',
    "french-fries": "With salt "
};
console.log(menu.burger);
console.log(menu["french-fries"]);

const createString = (array) =>{
    let newString = '';
    for (let i=0; i<array.length; i++){
        newString += array[i];

    }
    return newString;
};
console.log(createString([3, '5', 7, 2, 1]));
console.log(createString([2, '17', 35, 21, 11]));

const reverseValue = array =>{ // tot arrow function--parantezele pot lipsi cand avem un singur parametru
    let newString = '';
    for (let i=array.length -1; i >= 0; i--){
        newString += array[i];

    }
    return newString;
};

console.log(reverseValue([1, 2, 3, 4]));

const reverseArray = array => { // tot arrow function--parantezele pot lipsi can avem un sg parametru
    let newArray = [];
    for (let i=array.length -1; i >= 0; i--){
        newArray.push(array[i]) ;

    }
    return newArray;
};

console.log(reverseArray([1, 2, 3,4]))

const createArray = number =>{
    let newArray = [];
    for(let i=0; i <= number; i++){
        newArray.push(i)
    }
    return newArray;

}
console.log(createArray(8));

//Smart home app functions

let lightsValue = false;
let acValue = false;
let curtainsValue = true;
let windowsValue= false;
let tvValue= false;
let wifiValue= true;
let doorValue=true;


const toggleLights = () => {
    lightsValue = !lightsValue;
    //if (lightsValue === true)
    if (lightsValue){
        return 'Luminile au fost aprinse';

    } else{
        return 'Luminile au fost stinse';
    }
}



const toggleAc = () => {
    acValue = !acValue ;
        if (acValue){
            return 'Ac-ul a fost pornit';
    
        } else{
            return 'Ac a fost oprit';
}
}

const toggleCurtains = () => {
    curtainsValue = !curtainsValue ;
        if (curtainsValue){
            return 'Draperiile au fost deschise';
    
        } else{
            return 'Draperiile au fost inchise';
}
}
  

  const toggleWindows = () =>{
    windowsValue = !windowsValue;
    if(windowsValue){
        return 'Geamurile au fost deschise';
    
    } else{
        return 'Geamurile au fost inchise';

    }
  }

const smoke = ()=> {
    if(!windowsValue){
        toggleWindows();
    }
    if(acValue){
        toggleAc();
    }
    console.log('Smoking...');
    if ('winter'){
        toggleWindows();
    }
   

}

const playMusic = (song= 'Celine Dione') =>{
    console.log(`Playing .. ${song}`);

}

const toggleTv = () => {
    tvValue = !tvValue;
        if (tvValue){
            return 'Televizorul a fost deschis';
    
        } else{
            return 'Televizorul a fost inchis';
}
}
const toggleWifi = () =>{
    wifiValue = !wifiValue;
    if(wifiValue){
        return 'Wifi-ul a fost pornit';
    }else{
        return 'Wifi-ul a fost oprit';
    }
}
const toggledoor = () =>{
    doorValue = !doorValue;
    if(doorValue){
        return 'Usa a fost deschisa';
    
    } else{
        return 'Usa a fost inchisa';

    }
  }

toggleLights();
console.log(toggleLights());
toggleAc();
toggleCurtains();
toggleWindows();
toggleTv();
toggleWifi();
console.log(toggleWifi());
toggledoor();
smoke();