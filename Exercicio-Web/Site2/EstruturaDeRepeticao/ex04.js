// Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

let capA = 80000;
let capB = 200000;
let taxa_paisA = 0.03;
let taxa_paisB = 0.015;
let paisA, paisB, newCapA, newCapB;

paisA = capA;
paisB = capB;

for (let ano = 0; paisA <= paisB; ano++) {
    capA = capA + capA * taxa_paisA;
    capB = capB + capB * taxa_paisB;

    paisA = capA;
    paisB = capB;
    console.log(ano);
}
