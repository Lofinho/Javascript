// Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

let tamanho = Number(prompt('Digite o tamanho em m² da área a ser pintada'));

tam_lata = 18;
let qtde_latas = tamanho / tam_lata;
qtde_latas = parseInt(qtde_latas);
let p_total = qtde_latas * 80;

if (tamanho % tam_lata == 0) {
    alert(p_total.toFixed(0));
} else {
    qtde_latas++;
    p_total = qtde_latas * 80;
    alert(p_total.toFixed(0));
}