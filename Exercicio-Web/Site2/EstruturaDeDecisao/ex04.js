// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

let letra = prompt('Digite uma letra')

letra.toLocaleLowerCase()

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
  alert('Digitou uma vogal')
}else{
  alert('Digitou consoante')
}