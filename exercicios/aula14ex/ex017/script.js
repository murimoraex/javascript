function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c ++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}


/*
function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
 
let res1 = n * 1
let res2 = n * 2
let res3 = n * 3
let res4 = n * 4
let res5 = n * 5
let res6 = n * 6
let res7 = n * 7
let res8 = n * 8
let res9 = n * 9
let res10 = n * 10

tab.innerHTML = `${n}+1=${res1} <br>${n}+1=${res2} <br>${n}+1=${res3} <br>${n}+1=${res4} <br>${n}+1=${res5} <br>${n}+1=${res6} <br>${n}+1=${res7} <br>${n}+1=${res8} <br>${n}+1=${res9} <br>${n}+1=${res10} <br>`
*/