// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';

let nome, idade, salario, sexo, estado;

while(!(nome = '')){
  nome = prompt('Digite seu nome')

  if(nome.length <= 3){
    alert('oi')
  }else{
    break
  }
}