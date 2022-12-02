function tabuada() {
    let numero = document.querySelector('#txtn');
    let tabuada = document.querySelector('#seltab');

    if (numero.value.length == 0) {
        alert('Por favor digite um número!');
    } else {
        let number = Number(numero.value);
        let contador = 1;
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option');
            item.text = `${number} x ${contador} = ${number * contador}`;
            item.value= `tabuada${contador}`
            tabuada.appendChild(item);
            contador++;
        }
    }
}
