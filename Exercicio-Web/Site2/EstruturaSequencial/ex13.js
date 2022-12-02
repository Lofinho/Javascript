// Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
// Para homens: (72.7*h) - 58
// Para mulheres: (62.1*h) - 44.7

let altura = Number(prompt('Digite sua altura em CM'))
altura = altura / 100
const PIDEAL_H = (72.7*altura)-58
const PIDEAL_M = (62.1*altura)-44.7

alert(`Peso ideal para Homem ${PIDEAL_H.toFixed(1)}\nPeso ideal para Mulher ${PIDEAL_M.toFixed(1)}`)