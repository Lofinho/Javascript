// Faça um Programa que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
// Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:
// 326 = 3 centenas, 2 dezenas e 6 unidades
// 12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16

let n = Number(prompt('Digite o valor'));
let qtd_centena, qtd_dezena, qtd_unidade, new_n;

if (n > 0 && n < 1000) {
    if (n > 100) {
        qtd_centena = n / 100;
        new_n = n % 100;
        qtd_dezena = new_n / 10;
        new_n = n % 10;
        qtd_unidade = new_n / 1;

        alert(
            `${Math.floor(qtd_centena)}\n${Math.floor(
                qtd_dezena
            )}\n${Math.floor(qtd_unidade)}`
        );
    } else if (n < 100 && n >= 10) {
        qtd_dezena = n / 10;
        new_n = n % 10;
        qtd_unidade = new_n / 1;

        alert(`${Math.floor(qtd_dezena)}\n${Math.floor(qtd_unidade)}`);
    } else {
        qtd_unidade = n / 1;

        alert(`${Math.floor(qtd_unidade)}`);
    }
} else {
    alert('Digite um número entre 1 e 999');
}
