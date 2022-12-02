// Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

let sexo = prompt('Escolha M ou F para o sexo');

if (sexo.toUpperCase() == 'M') {
    alert(`Escolheu Masculinho`);
} else if (sexo.toUpperCase() == 'F') {
    alert(`Escolheu Feminino`);
}

