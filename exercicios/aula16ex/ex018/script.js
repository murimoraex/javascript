let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

num.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        adicionar()
    }
})

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            } if(valores[pos] < menor) {
                menor = valores[pos]
            }     
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

/*
let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function adicionar() {
    let n = Number(num.value)  // Captura o valor atual toda vez que a função é chamada
    if (isNaN(n) || n < 1 || n > 100 || valores.includes(n)) {  // Verifica se o número é válido
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        valores.push(n)

        let valor = document.createElement('option')
        valor.text = `Valor ${n} adicionado.`
        valor.value = `lista${n}`
        lista.appendChild(valor)
        num.value = ''
        num.focus()
    }  
    res.innerHTML = ''
}

num.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        adicionar()
    }
})

function finalizar() {
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)
    let soma = 0
    for(let pos in valores) { 
        soma += valores[pos] 
    } 
    let divisão = soma / valores.length
    let media = parseFloat(divisão.toFixed(2))

    res.innerHTML = `<p>Ao todo temos ${valores.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma dos valores digitados é ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}
*/    