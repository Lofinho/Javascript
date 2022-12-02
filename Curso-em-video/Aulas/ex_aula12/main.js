function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('.img-circular')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'img/manha.png'
        document.body.style.background = '#f3f0cc'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = '#dd7c40'
    } else {
        // BOA TARDE
        img.src = 'img/noite.png'
        document.body.style.background = '#16263F'
    }
    
}