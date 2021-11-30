var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
    // console.log(pacientes[i]);

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido   = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if (!pesoEhValido) {
        // console.log("Peso inválido");
        // pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValido) {
        // console.log("Altura inválido");
        // alturaEhValido = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    if(pesoEhValido && alturaEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}


function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura < 3.00){
        return true;
    } else {
        return false;
    }
}


function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

