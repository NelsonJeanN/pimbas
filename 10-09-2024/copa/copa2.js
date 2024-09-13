const prompt = require("prompt-sync")()

let ano
let anoValido = false

while (!anoValido) {
    ano = Number(prompt("Coloque o ano entre 1930-2024: "))

    if (ano < 1930 || ano > 2024) {
        console.log("Coloque o ano entre 1930-2024")
    } else {
        anoValido = true

        if (ano <= 1942 || ano <= 1946) {
            console.log(`Esse ano ${ano} não teve Copa por causa da guerra.`)
        } else if ((ano - 1930) % 4 === 0) {
            console.log(`${ano} é um ano de Copa do Mundo.`)
        } else {
            console.log(`${ano} não é um ano de Copa do Mundo.`)
        }
    }
}