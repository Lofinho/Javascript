let num = document.querySelector('#fnum');
let lista = document.querySelector('#flista');
let resultado = document.querySelector('#resultado');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} foi adicionado`;
        lista.appendChild(item);
        resultado.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar');
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0
        let media = 0
        for (let posicao in valores) {
          soma += valores[posicao]
            if (valores[posicao] > maior) maior = valores[posicao];
            if (valores[posicao] < menor) menor = valores[posicao];
        }

        media = soma / total
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        resultado.innerHTML += `<p>Somando todos os valores, temos${soma}.</p>`;
        resultado.innerHTML += `<p>A média de todos os valores é ${media.toFixed(3)}</p>`;
    }
}
