// Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].

let number = ''

do{
  number = Number(prompt('Digite um número'))
  if(number == ''){
    alert('É necessário informar um número')
  }else {
    alert(`O número informado foi ${number}`)
  }
}while (number == 0)