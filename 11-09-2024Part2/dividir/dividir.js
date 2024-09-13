const prompt = require("prompt-sync")()

const num1 = Number(prompt("Coloque o Primeiro numero: "))

let num2
do {
    num2 = Number(prompt("Coloque o Segundo numero: "))

    if (num2 === 0) {
        console.log("VALOR INVÁLIDO")
    }
}
while (num2 === 0)
let resultado = num1 / num2
console.log(`O resultado é: ${resultado}`)