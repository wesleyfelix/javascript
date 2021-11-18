var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

console.log(paciente); // tr
console.log(tdPeso); // td que tem o peso
console.log(tdAltura); // td que tem a altura
console.log(peso); // obter 100
console.log(altura); // obter 2.00

var tdImc = paciente.querySelector(".info-imc");


var imc = peso / (altura * altura);

tdImc.textContent = imc;

console.log(imc);