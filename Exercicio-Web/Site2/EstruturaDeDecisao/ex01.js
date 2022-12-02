// Faça um Programa que peça dois números e imprima o maior deles.

let n1 = Number(prompt('Digite o primeiro número'))
let n2 = Number(prompt('Digite o segundo número'));

if(n1 > n2){
  alert(`O número ${n1} é maior`)
}else if(n1 < n2){
  alert(`O número ${n2} é maior`)
}else{
  alert(`Os números ${n1} e ${n2} são iguais`)
}
