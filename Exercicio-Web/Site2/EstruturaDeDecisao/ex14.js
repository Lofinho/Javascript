// Faça um programa que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:
//   Média de Aproveitamento  Conceito
//   Entre 9.0 e 10.0        A
//   Entre 7.5 e 9.0         B
//   Entre 6.0 e 7.5         C
//   Entre 4.0 e 6.0         D
//   Entre 4.0 e zero        E
// O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

let n1 = Number(prompt('Digite a primeira nota'));
let n2 = Number(prompt('Digite a segunda nota'));
let media = (n1 + n2) / 2;

if (n1 >= 0 && n1 <= 10 && n2 >= 0 && n2 <= 10) {
  if(media > 9){
    alert('A')
  }else if(media >= 7.5){
    alert('B')
  }else if(media >= 6){
    alert('C')
  }else if(media >= 4){
    alert('D')
  }else{
    alert('E')
  }

}else{
  alert('Valor Inválido')
}