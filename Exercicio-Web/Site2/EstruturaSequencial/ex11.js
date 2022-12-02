// Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
// o produto do dobro do primeiro com metade do segundo .
// a soma do triplo do primeiro com o terceiro.
// o terceiro elevado ao cubo.

let int1 = Number(prompt('Digite o primeiro número inteiro'))
let int2 = Number(prompt('Digite o segundo número inteiro'))
let real = Number(prompt('Digite um número real'))

let a = int1*2 + int2/2
let b = int1*3 + int2
let c = real**3

alert(`${a}\n${b}\n${c}`)