// Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.

let p1 = Number(prompt('Digite o valor do primeiro produto'));
let p2 = Number(prompt('Digite o valor do segundo produto'));
let p3 = Number(prompt('Digite o valor do terceiro produto'));

let maior = p1;
let menor = p1;

if (p2 > maior) {
    maior = p2;
} else if (p2 < menor) {
    menor = p2;
}

if (p3 > maior) {
    maior = p3;
} else if (p3 < menor) {
    menor = p3;
}

alert(`maior ${maior} menor ${menor}`);

if ((menor == p1)) {
    alert('Compre o primeiro produto');
} else if (menor == p2) {
    alert('Compre o segundo produto');
} else {
    alert('Compre o terceiro produto');
}
