// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';

let nome, idade, salario, sexo, civil;
let estado_civil = ['S', 'C', 'V', 'D']

do {
    nome = prompt('Digite seu nome:');

    if (nome.length <= 3 || Number(nome)) {
        alert('Nome menor que 3 caractéres');
    } else if (Number(nome)) {
        alert('Digite apenas letras');
    }
} while (Number(nome) || nome.length <= 3);

do {
    idade = Number(prompt('Digite a sua idade:'));

    if (!(idade >= 0 && idade <= 150)) {
        alert('Digite entre 0 e 150');
    }
} while (!(idade >= 0 && idade <= 150));

do {
    salario = Number(prompt('Digite seu salário'));

    if (!(salario > 0)) {
        alert('Digite um valor acima de 0 e apenas números');
    }
} while (!(salario > 0));

do{
  sexo = prompt('Digite seu sexo:\nF para Feminino\nM para Masculino')

  if(sexo.toUpperCase() != 'F' && sexo.toUpperCase() != 'M'){
    alert('Digite F para Feminino ou M para Masculino')
  }
}while(sexo.toUpperCase() != 'F' && sexo.toUpperCase() != 'M')

do{
  civil = prompt('Digite seu estado civil:\nS para Solteiro\nC para Casado\nD para Divorciado\nV para Viúvo')

  if(!estado_civil.includes(civil.toUpperCase())){
    alert('Escolha uma das opções')
  }
}while(!estado_civil.includes(civil.toUpperCase()))