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

var pesoEhValido = true;
var alturaEhValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválido");
    alturaEhValido = false;
    tdImc.textContent = "Altura inválida";
}
if(pesoEhValido && alturaEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}



console.log(imc);