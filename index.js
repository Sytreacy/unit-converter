/*
round the num down to 3 decimal places
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputNum = document.getElementById("unit-input-field");
let meterFeetUnit = document.getElementById("meterFeetUnit");
let convertVolumeUnit = document.getElementById("convertVolume");
let convertMassUnit = document.getElementById("convertMass");

let result1;
let result2;
let resultUnit;

inputNum.addEventListener("input", function () {
  inputNum.value = inputNum.value;
});

function meterFeet() {
  result1 = inputNum.value * 3.281;
  result2 = inputNum.value / 3.281;
  resultUnit = `${inputNum.value} meters = ${Number(result1).toFixed(
    3
  )} feet | ${inputNum.value} feet = ${Number(result2).toFixed(3)} meters`;
  return resultUnit;
}

function convertVolume() {
  result1 = inputNum.value * 0.264;
  result2 = inputNum.value / 0.264;
  resultUnit = `${inputNum.value} liters = ${Number(result1).toFixed(
    3
  )} gallons | ${inputNum.value} gallons = ${Number(result2).toFixed(
    3
  )} liters`;
  return resultUnit;
}

function convertMass() {
  result1 = inputNum.value * 2.204;
  result2 = inputNum.value / 2.204;
  resultUnit = `${inputNum.value} kilos = ${Number(result1).toFixed(
    3
  )} pounds | ${inputNum.value} pounds = ${Number(result2).toFixed(3)} kilos`;
  return resultUnit;
}

function convertUnits() {
  meterFeetUnit.textContent = meterFeet();
  convertVolumeUnit.textContent = convertVolume();
  convertMassUnit.textContent = convertMass();
}

let convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", convertUnits);

inputNum.value = 20;
convertUnits();
