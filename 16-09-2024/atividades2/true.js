const prompt = require("prompt-sync")()

let coloque = prompt("Digete a cor(preto,branco,azul,verde): ")
let frutas = ["preto","branco","azul","verde"]

console.log(frutas.includes(coloque))