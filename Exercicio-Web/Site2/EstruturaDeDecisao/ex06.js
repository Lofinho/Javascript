// Faça um Programa que leia três números e mostre o maior deles.

let n1 = Number(prompt('Digite o primeiro número'));
let n2 = Number(prompt('Digite o segundo número'));
let n3 = Number(prompt('Digite o terceiro número'));

if(n1 > n2 && n1 > n3){
  alert(`O número ${n1} é o maior`)
}else if(n2 > n1 && n2 > n3){
  alert(`O número ${n2} é o maior`)
}else if(n3 > n1 && n3 > n2){
  alert(`O número ${n3} é o maior`)
}else{
  alert('Os números são iguais')
}