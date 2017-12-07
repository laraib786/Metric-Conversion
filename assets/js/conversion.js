function fConverter(valNum) {
  document.getElementById("outputMeters").value =valNum/3.2808;
  document.getElementById("outputInches").value =valNum*12;
  document.getElementById("outputcm").value =valNum/0.032808;
  document.getElementById("outputYards").value =valNum*0.33333;
  document.getElementById("outputKilometers").value =valNum/3280.8;
  document.getElementById("outputMiles").value =valNum*0.00018939;
  document.getElementById("outputmm").value = valNum *304.8;
}

function lConverter(x) {
  document.getElementById("outputFeet").value = x*3.2808;
  document.getElementById("outputInches").value = x*39.370;
  document.getElementById("outputcm").value =x/0.01;
  document.getElementById("outputYards").value =x*1.0936;
  document.getElementById("outputKilometers").value =x/1000;
  document.getElementById("outputMiles").value =x*0.00062137;
  document.getElementById("outputmm").value =x * 1000;
}

function iConverter(y) {
  document.getElementById("outputFeet").value =y*0.083333;
  document.getElementById("outputMeters").value =y/39.370;
  document.getElementById("outputcm").value =y/0.39370;
  document.getElementById("outputYards").value =y*0.027778;
  document.getElementById("outputKilometers").value =y/39370;
  document.getElementById("outputMiles").value =y*0.000015783;
  document.getElementById("outputmm").value =y*25.4;
}

function yConverter(z) {
  document.getElementById("outputFeet").value =z*3;
  document.getElementById("outputMeters").value =z/1.0936;
  document.getElementById("outputInches").value =z*36;
  document.getElementById("outputcm").value =z/0.010936;
  document.getElementById("outputKilometers").value =z/1093.6;
  document.getElementById("outputMiles").value =z*0.00056818;
  document.getElementById("outputmm").value =z*914.4;
}

function mConverter(a) {
  document.getElementById("outputFeet").value =a*5280;
  document.getElementById("outputMeters").value =a/0.00062137;
  document.getElementById("outputInches").value =a*63360;
  document.getElementById("outputcm").value =a/0.0000062137;
  document.getElementById("outputYards").value =a*1760;
  document.getElementById("outputKilometers").value =a/0.62137;
  document.getElementById("outputmm").value =a*1609344;
}

function cmConverter(b) {
  document.getElementById("outputFeet").value =b*0.032808;
  document.getElementById("outputMeters").value =b/100;
  document.getElementById("outputInches").value =b*0.39370;
  document.getElementById("outputYards").value =b*0.010936;
  document.getElementById("outputKilometers").value =b/100000;
  document.getElementById("outputMiles").value =b*0.0000062137;
  document.getElementById("outputmm").value =b/10;
}

function kmConverter(c) {
  document.getElementById("outputFeet").value =c*3280.8;
  document.getElementById("outputMeters").value =c*1000;
  document.getElementById("outputInches").value =c*39370;
  document.getElementById("outputcm").value =c*100000;
  document.getElementById("outputYards").value =c*1093.6;
  document.getElementById("outputMiles").value =c*0.62137;
  document.getElementById("outputmm").value =c/1000000;
}
function mmConverter(mm){
  document.getElementById('outputFeet').value = mm / 304.8;
  document.getElementById('outputMeters').value = mm / 1000;
  document.getElementById("outputInches").value =mm/25.4;
  document.getElementById("outputYards").value =mm/914.4;
  document.getElementById("outputMiles").value =mm/1609344;
  document.getElementById("outputcm").value =mm*10;
  document.getElementById("outputKilometers").value =mm/1000000;
}
function pweightConverter(d) {
  document.getElementById("outputKilograms").value =d/2.2046;
  document.getElementById("outputStones").value =d*0.071429;
  document.getElementById("outputGrams").value =d/0.0022046;
}

function kgweightConverter(e) {
  document.getElementById("outputPounds").value =e*2.2046;
  document.getElementById("outputStones").value =e*0.1574;
  document.getElementById("outputGrams").value =e*1000;
}

function sweightConverter(f) {
  document.getElementById("outputPounds").value =f*14;
  document.getElementById("outputKilograms").value =f/0.15747;
  document.getElementById("outputGrams").value =f/0.00015747;
}

function gweightConverter(g) {
  document.getElementById("outputPounds").value =g*0.0022046;
  document.getElementById("outputKilograms").value =g/1000;
  document.getElementById("outputStones").value =g*0.00015747;
}

function fertemperatureConverter(h){
  document.getElementById("outputCelcius").value =(h-32)/1.8;
}

function celtemperatureConverter(i){
  document.getElementById("outputFahrenheit").value =(i*1.8)+32;
}