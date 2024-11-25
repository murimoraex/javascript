function verificar() {
    var nome = window.document.querySelector('input#nome')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        if (fsex[0].checked) {
            gênero = 'um Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-h.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-h.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-h.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'velho-h.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'uma Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'velho-m.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.style.color = 'rgb(158, 121, 74)'
        res.innerHTML = `<p>Olá ${nome.value}, você é ${gênero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}