// Faça um Programa que peça as 4 notas bimestrais e mostre a média.


let nome_aluno = prompt('Digite o nome do aluno');
let soma = 0;
const QTDE_NOTA = 5;

for (n_bimestre = 1; n_bimestre < QTDE_NOTA; n_bimestre++) {
    nota = Number(prompt(`Digite a ${n_bimestre}° do ${nome_aluno}`));
    soma = soma + nota
}

let media = soma / 4;

alert(`A média do aluno ${nome_aluno} é ${media}`);