function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector('#txtano')
    var resultado = document.querySelector('#resultado')
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/homem-idoso.png')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade < 10) {
                // Criança
                img.setAttribute('src', 'img/menina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/mulher-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/mulher-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/mulher-idosa.png')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}
