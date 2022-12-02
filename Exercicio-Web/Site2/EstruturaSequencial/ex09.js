// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9).

let Fahrenheit = Number(prompt('Digite o valor em Fahrenheit'));
let celcius = ((Fahrenheit-32)*5)/9

alert(`A temperatura é de ${Math.floor(celcius)}° graus`);