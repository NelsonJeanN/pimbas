const prompt = require("prompt-sync")()

const matriz = [
    [1, 2, 3],
    [4, 5, 6,],
    [7, 8, 9]
]
const resultado = matriz
    .flat().filter(num => num % 2 === 0).map(num => num * 3)
console.log(resultado)