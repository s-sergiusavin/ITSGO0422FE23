function temperaturaAfara (temperatura) {
    console.log(`Temperatura de afara este ${temperatura}`);
}

temperaturaAfara (46);


function orderPizza (i1, i2, i3) {
    console.log(`As dori sa comand o pizza cu ${i1}, ${i2}, ${i3}`)
}


orderPizza(`salami`, `rucola`, `tomato`);


function doSum (a, b) {
    console.log (`Suma este ${a + b}`);
    return a + b;
}

doSum(5, 7);


let sumResult = doSum(5, 7);
console.log(sumResult);
let pizzaOrdered= 0

function doAnotherPizza (i1, i2, i3) {
    console.log(`Pizza cu ${i1+` `+ i2 + ` `+ i3} in preparare`);
    pizzaOrdered += 1;
    return pizzaOrdered;
}

const anounce = doAnotherPizza("ciuperci", "ardei","salam")
console.log (anounce)