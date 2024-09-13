const prompt = require("prompt-sync")()

const num = Number(prompt("Quantasa vezes deve ser repetido? "))

const pala = prompt("Qual a palavra deve ser repetida? ")

let i = 1
while (i <= num){
    console.log(pala)
    i++
}
