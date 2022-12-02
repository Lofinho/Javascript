// Faça um Programa que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.

let ano = Number(prompt('Digite o ano '))

if (ano % 400 == 0) {
    alert(`O ano ${ano} é bissexto`);
} else if (ano % 4 == 0 && ano % 100 != 0) {
    alert(`O ano ${ano} é bissexto`);
} else {
    alert('O ano não é bissexto');
}