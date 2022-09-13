
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputField= document.getElementById('input-field');
let meterP = document.getElementById('meter');
let literP = document.getElementById('liter');
let kiloP = document.getElementById('kilo');
let meter,feet, liter,galon,kilogram,pound;

function conver(){
    inputField = Number(inputField.value);
    meter = inputField*3.281;
    meter=meter.toFixed(3);
    feet = inputField/3.281;
    feet = feet.toFixed(3);

    liter= inputField*0.264;
    liter = liter.toFixed(3);
    galon = inputField/0.264;
    galon = galon.toFixed(3);

    kilogram = inputField*2.204;
    kilogram=kilogram.toFixed(3);
    pound = inputField/2.204;
    pound = pound.toFixed(3);



    meterP.textContent =`${inputField} meters = ${meter} feet | ${inputField} feet = ${feet} meters `;

    literP.textContent = `${inputField} liters = ${liter} gallon | ${inputField} gallon = ${galon} liters`;

    kiloP.textContent = `${inputField} kilos = ${kilogram} pounds | ${inputField} pounds = ${pound} kilos`;


    

}