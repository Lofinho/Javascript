// Faça um Programa que peça dois números e imprima a soma.

let n1 = '';
let n2 = '';


do {
    n1 = Number(prompt('Digite o primeiro número'));
    if (n1 == '') {
        alert('Digite um número para avançar');
    }
} while (n1 == '');

do {
    n2 = Number(prompt('Digite o segundo número'));
    if (n2 == '') {
        alert('Digite um número para avançar');
    }else{
      let soma = n1 + n2;
      alert(`A soma de ${n1} + ${n2} é ${soma}`)
    }
} while (n2 == '');
