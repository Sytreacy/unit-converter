/*
round the num down to 3 decimal places
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputNum = document.getElementById("unit-input-field");
let num = document.getElementById("unit-input-field").value;

let meterFeetUnit = document.getElementById("meterFeetUnit");
let convertVolumeUnit = document.getElementById("convertVolume");
let convertMassUnit = document.getElementById("convertMass");

let result1;
let result2;
let resultUnit;

function meterFeet() {
  result1 = num * 3.281;
  result2 = num / 3.281;
  resultUnit = `${num} meters = ${Number(result1).toFixed(
    3
  )} feet | ${num} feet = ${Number(result2).toFixed(3)} meters`;
  return resultUnit;
}

function convertVolume() {
  result1 = num * 0.264;
  result2 = num / 0.264;
  resultUnit = `${num} liters = ${Number(result1).toFixed(
    3
  )} gallons | ${num} gallons = ${Number(result2).toFixed(3)} liters`;
  return resultUnit;
}

function convertMass() {
  result1 = num * 2.204;
  result2 = num / 2.204;
  resultUnit = `${num} kilos = ${Number(result1).toFixed(
    3
  )} pounds | ${num} pounds = ${Number(result2).toFixed(3)} kilos`;
  return resultUnit;
}

inputNum.addEventListener("input", function () {
  num = inputNum.value;
});

function convertUnits() {
  meterFeetUnit.textContent = meterFeet();
  convertVolumeUnit.textContent = convertVolume();
  convertMassUnit.textContent = convertMass();
}

let convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", convertUnits);
