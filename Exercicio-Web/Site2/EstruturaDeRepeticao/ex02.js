// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let usuario, senha

while(usuario == senha){
  usuario = prompt('Digite seu Login')
  senha = prompt('Digite a sua senha')
  
  if(usuario == senha){
    alert('ERRO, a senha não pode ser igual ao usuário');
  }
}