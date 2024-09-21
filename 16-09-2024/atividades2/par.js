const prompt = require("prompt-sync")()

let numeros = [1,2,3,4,5,6]
let par = []
console.log(numeros)
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        par.push(numeros[i])
    }
}
console.log(par)