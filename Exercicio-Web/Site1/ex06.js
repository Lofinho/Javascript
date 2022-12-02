// 6. Calcular o IMC do usuário. Use as TAGs: <input>, <button> e <div>.

function calcularIMC() {
    var peso = document.querySelector('#peso').value;
    var altura = document.querySelector('#altura').value;
    altura /= 100;
    var imc = peso / altura ** 2;
    var resultado = document.querySelector('#resultado');
    resultado.innerHTML = `Seu IMC é de ${imc}`;
}

var peso = parseFloat(document.querySelector('#peso'));
var altura = parseFloat(document.querySelector('#altura'));
var imc = peso / altura ** 2;
var resultado = document.querySelector('#resultado');
resultado.innerHTML = `O calculo do seu IMC é de ${imc}`;
