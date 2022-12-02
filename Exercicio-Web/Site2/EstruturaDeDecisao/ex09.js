// Faça um Programa que leia três números e mostre-os em ordem decrescente.

let n1 = Number(prompt('Digite o primeiro número'));
let n2 = Number(prompt('Digite o segundo número'));
let n3 = Number(prompt('Digite o terceiro número'));

let maior, meio, menor;

if(n1 > n2 && n1 > n3){
    maior = n1
    if(n2 > n3){
        meio = n2
        menor = n3
    }else{
        meio = n3
        menor = n2
    }
}else if(n1 < n2 && n1 < n3){
    menor = n1
    if(n2 > n3){
        maior = n2
        meio = n3
    }else{
        maior = n3
        meio = n2
    }
}else{
    meio = n1
    if(n2 > n3){
        maior = n2
        menor = n3
    }else{
        maior = n3
        menor = n2
    }
}

alert(
    `O número maior é ${maior}\nO número do meio é ${meio}\nO número menor é ${menor}`
);


/*
if (n1 > n2 && n1 > n3) {
    maior = n1;
} else if (n1 < n2 && n1 < n3) {
    menor = n1;
} else {
    meio = n1;
}

if (n2 > n1 && n2 > n3) {
    maior = n2;
} else if (n2 < n1 && n2 < n3) {
    menor = n3;
} else {
    meio = n2;
}

if (n3 > n1 && n3 > n1) {
    maior = n3;
} else if (n3 < n1 && n3 < n2) {
    menor = n3;
} else {
    meio = n3;
}
*/