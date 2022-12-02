// Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

const turno = prompt('Digite o seu turno\nM para Maturino\nV para Vespertino\nN para Noturno');

const manha = 'm'
const tarde = 'v'
const noite = 'n'

if(turno.toLowerCase() == manha){
  alert('Bom dia!')
}else if(turno.toLocaleLowerCase() == tarde){
  alert('Boa tarde!')
}else if(turno.toLowerCase() == noite){
  alert('Boa noite')
}else{
  alert('Valor Inválido')
}