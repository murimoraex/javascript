var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${horas}:${minutos} horas.`)

if (horas >= 6 && horas < 12) {
    console.log('Bom dia!')
} else if (horas > 12 && horas <= 18) {
    console.log('Boa tarde!')
} else if (horas > 18 && horas <= 23){
    console.log('Boa noite!')
} else if (horas < 6){
    console.log('Vai dormir maluco!')
} 