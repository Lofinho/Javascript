// Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
// Dicas:
// Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
// Triângulo Equilátero: três lados iguais;
// Triângulo Isósceles: quaisquer dois lados iguais;
// Triângulo Escaleno: três lados diferentes;

let ladoA = Number(prompt('Digite o valor do lado A'))
let ladoB = Number(prompt('Digite o valor do lado B'))
let ladoC = Number(prompt('Digite o valor do lado C'))

let triangulo = ladoA + ladoB > ladoC || ladoA + ladoC > ladoB || ladoB + ladoC > ladoA
let isosceles = ladoA == ladoB || ladoA == ladoC || ladoB == ladoC
let iguais = ladoA == ladoB == ladoC
let escaleno = ladoA != ladoB != ladoC

if(triangulo == true){
  if (iguais == true) {
      alert('O triângulo é Equilátero');
  } else if (isosceles == true) {
      alert('O triângulo é Isósceles');
  } else if (escaleno == true) {
      alert('O triângulo é escaleno');
  }
}