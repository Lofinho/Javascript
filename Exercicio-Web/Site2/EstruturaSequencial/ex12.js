// Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58

let altura = Number(prompt('Digite sua altura em CM'));
altura = altura / 100;
const PESO_IDEAL = 72.7 * altura - 58;

alert(`Seu peso ideal é ${PESO_IDEAL.toFixed(1)}`)