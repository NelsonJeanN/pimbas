const prompt = require("prompt-sync")()

let soma = 0
const quantidade = 10

for (let i = 1; i <= quantidade; i++) {

    const valor = Number(prompt(`Digite o valor ${i}: `))

    soma += valor;
}

const media = soma / quantidade

console.log(`A media dos valores é: ${media}`)