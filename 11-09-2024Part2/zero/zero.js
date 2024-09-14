const prompt = require("prompt-sync")()

const valor = Number(prompt("Digite um valor maior que zero: "))

let i = 1

while (i <= valor) {
    console.log(i)
    i++ 
}
