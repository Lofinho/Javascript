// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.


let numero

while (!(numero >= 0 && numero <= 10)) {
  numero = Number(prompt('Digite um número entre 0 e 10'))

  if(!(numero >= 0 && numero <= 10)){
    alert('Valor inválido')
  }
}