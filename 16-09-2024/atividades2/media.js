const prompt = require("prompt-sync")
let numeros = [10,20,30,40,50,4];
let soma = 0;
console.log(numeros)
for(let i = 0;i < numeros.length;i++){
    soma += numeros[i]
}
let total = soma / numeros.length
console.log(`A média é ${total.toFixed(0)}`)