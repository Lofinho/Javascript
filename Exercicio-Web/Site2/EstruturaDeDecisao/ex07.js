// Faça um Programa que leia três números e mostre o maior e o menor deles.

let n1 = Number(prompt('Digite o primeiro número'));
let n2 = Number(prompt('Digite o segundo número'));
let n3 = Number(prompt('Digite o terceiro número'));

let maior = n1;
let menor = n1;

if (n2 > maior) {
    maior = n2;
} else if (n2 < menor) {
    menor = n2;
}

if (n3 > maior) {
    maior = n3;
} else if (n3 < menor) {
    menor = n3;
} else {
    alert('Os números são iguais');
}

alert(`O número maior é ${maior}\nO número menor é ${menor}`);

