const prompt = require("prompt-sync")()

let alcool = 0
let gasolina = 0
let diesel = 0
let pergunta

while (true) {

    pergunta = Number(prompt("Digite o numero do combustível 1-Álcool, 2-Gasolina, 3-Diesel, 4-Fim: "))

    if (pergunta === 1 || pergunta === 2 || pergunta === 3) {
        if (pergunta === 4) {
            break
        }
        switch (pergunta) {
            case 1:
                console.log("alcool")
                alcool++
                break
            case 2:
                console.log("gasolina")
                gasolina++
                break
            case 3:
                console.log("diesel")
                diesil++
                break
        } {
            console.log("Numero errado coloque o numero entre 1-4")
        }
    }
    }
    console.log('MUITISSIMO OBRIGADO!!!!!!!!!!')
    console.log('Álcool: ' + alcool)
    console.log('Gasolina: ' + gasolina)
    console.log('Diesel: ' + diesel)