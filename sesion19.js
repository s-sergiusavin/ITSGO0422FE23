function logstuff(stuff){
    console.log(`rezultatul este :${stuff}`);
}

let sum=0;

function addToSum(number){
    return sum=sum+number;
}
addToSum(3);
logstuff(addToSum(10));
addToSum(10);
let totalSum=addToSum(10);

logstuff(totalSum);
logstuff(sum);


//function sumNumbers(number1,number2)
let sumNumbers= function(number1,number2){
return number1+number2;}
let sumNumbersArrow=(number1,number2)=> number1+number2;

let sumTwoNumbers= sumNumbersArrow(5,10);
logstuff(sumTwoNumbers);
logstuff(sumNumbers(1,2));

function verifyequality(num1,num2){
    if(num1===num2){
        return true;
    } else{
      return false;
    }
}
function verifyEgquailtySimplified(num1,num2){
    return num1===num2;
}
logstuff(verifyequality(2,2));

function doubleValue(value){
    return value*2;
    console.log(`ceva`);
}
logstuff(doubleValue(3));

function sayName(name='lucian'){
    
    console.log(`Salut ${name}`);
    console.log("Salut"+name);
}
sayName(); 
  // debugger;-opreste executia
   //tasta f8- revine la norlmal
   //tasta f10-sari peste un pas
   //tasta f11 -intri intr-o functie

function removeNumbers(num1,num2){
 
   if(num1>num2)  {
    return num1-num2;
   } else {
    return num2-num1;
          } 
}
logstuff(removeNumbers(5,7));

logstuff(removeNumbers(5,4));
logstuff(removeNumbers(5,5));

function verifyNumber(number){
    if(number>10 && number<50) {
        return "Da";
    }
  
else{ return "Nu";

} }
logstuff(verifyNumber(6))

//OBJECTS

const puppy={
    namepuppy:"Rex",
    Age: 2,
    favoriteToys: ["Duck","Cat", "bone"],
    bark: function(){
        console.log ("Ham");
    }
}
const anotherpuppy=puppy;


const menu={
    burger:'Big Mac',
    juice:'cola',
    size:'small',
    'french-fries':'with salt'
}
console.log(menu.burger);
console.log(menu["french-fries"]);

//Algoritm

const createString=(array)=>{
    let newString='';
for(let i=0;i<array.length;i++)
{newString+=array[i];
}
return newString;}
console.log(createString([3,'5',7 ,2 ,1]));

const reverseValue= array=>{// tot arrow function
    
}

// Smart home app function

let lightValue = false;
let acValue=false;
let curtainsValue=true;
let windowsValue=false;


const toggleLights=()=>{
lightValue=!lightValue;
if(lightValue){
return "Luminile au fost aprinse";
} else {
 return   "Luminile au fost stinse";
}
}
const toggleAc=()=>{
acValue=!acValue;
if(acValue){
return "Ac-ul a fost aprins";
} else {
 return   "Ac-ul a fost stins";
}
}
const toggleCurtains=()=> {
    curtainsValue=!curtainsValue;
    if(curtainsValue){
    return "Draperiile au fost deschise";
    } else {
     return   "Draperiile au fost inchise";
    }
}


const toggleWindows=()=> {
    windowsValue=!windowsValue;
    if(windowsValue){
    return "Geamurile au fost deschise";
    } else {
     return   "Geamurile au fost inchise";
    }
}

const smoke=()=>
{


if(!windowsValue){
    toggleWindows();
}
if(acValue){
    toggleAc();
}
console.log('Smoking...')
if('Winter'){
    toggleWindows();
}
}
const playMusic=(song= "Celin Dion")=>{
console.log(`Playing..${song}`)

}

// ------------Tema sesiunea 19 ---------------

let temp=18;
let humidityLevel=45;
let humidifierState = false;
let dehumidifierState = false;
let heatState = false;
let vacuumState= false;

const termostat=(desiredTemp)=>
{
    while(temp<desiredTemp)
    {
        heatState = true;
        console.log("Se incalzeste");
        temp+=1;
        console.log(`sunt ${temp} grade`);
    }
    console.log("Caldura este oprita");
    console.log(`sunt ${temp} grade`);
    heatState = false;

}

const humidity = (desiredHumidity)=>{
    while(humidityLevel<desiredHumidity){
 humidifierState=true;
 console.log("umidificatorul este pronit");
 console.log(`nivelul de umiditate al aerului este la ${humidityLevel} %`);
 humidityLevel+=1;
    }
    humidifierState=false;
    console.log("Umidificatorul este oprit");
    while(humidityLevel>desiredHumidity){
        dehumidifierState=true;
        console.log("dezumidificatorul este pronit");
        console.log(`nivelul de umiditate al aerului este la ${humidityLevel} %`);
        humidityLevel-=1;
           }
           dehumidifierState=false;
           console.log("dezumidificatorul este oprit");
           console.log(`nivelul de umiditate al aerului este la ${humidityLevel} %`);

}

const togglevacuumcleaner = ()=> {
    vacuumState=!vacuumState;
    if(vacuumState){
        console.log('Aspiratorul este pornit');
    } else {
        console.log("Aspiratorul este oprit")
    }
}




termostat(21);
humidity(55);
togglevacuumcleaner();





toggleLights();
console.log(toggleLights());
toggleAc();
console.log(toggleAc());
toggleCurtains();
console.log(toggleCurtains());
smoke();

termostat(21);
humidity(55);
