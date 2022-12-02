// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

let salario = Number(prompt('Digite o seu salário'))
let horas_trabalhadas = Number(prompt('Digite quantas horas trabalha por mês'))
let valor_hora = salario / horas_trabalhadas

alert(`Você ganha por hora ${valor_hora.toFixed(2)}`)