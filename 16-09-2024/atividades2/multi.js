const prompt = require("prompt-sync")()

// let numeros = [1,2,3]
//     numeros[0] = numeros[0] * 2;
//     numeros[1] = numeros[1] * 2;
//     numeros[2] = numeros[2] * 2;
// console.log(numeros)

let numeros = [1,2,3]
let dobradas = numeros.map( numeros => numeros * 2)
console.log(dobradas)