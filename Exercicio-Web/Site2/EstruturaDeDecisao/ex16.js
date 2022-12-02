// Faça um programa que calcule as raízes de uma equação do segundo grau, na forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e fazer as consistências, informando ao usuário nas seguintes situações:
// Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e o programa não deve fazer pedir os demais valores, sendo encerrado;
// Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao usuário e encerre o programa;
// Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a ao usuário;
// Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;

let a = Number(prompt('Digite o valor de A'))
let b = Number(prompt('Digite o valor de B'));
let c = Number(prompt('Digite o valor de C'));
let delta = (-b)**2 - (4 * a * c)

if(a == 0){
  alert('A equação não é do segundo grau')
}else{
  
  if(delta < 0){
    alert('A equação não possui raízes reais')
  }else if(delta == 0){
    alert('A equação possui apenas 1 raíz real')
  }else if(delta > 0){
    alert('A equação possui duas raízes reais')
  }
  
}