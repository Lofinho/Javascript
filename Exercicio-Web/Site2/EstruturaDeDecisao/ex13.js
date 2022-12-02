// Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

let n = Number(prompt('Digite um número de 1 a 7'));

if (n < 0 || n > 7) {
    alert('Digite um valor entre 1 e 7');
} else {
    if (n == 1) {
        alert('Domingo');
    } else if (n == 2) {
        alert('Segunda');
    } else if (n == 3) {
        alert('Terça');
    } else if (n == 4) {
        alert('Quarta');
    } else if (n == 5) {
        alert('Quinta');
    } else if (n == 6) {
        alert('Sexta');
    } else if (n == 7) {
        alert('Sábado');
    }
}
