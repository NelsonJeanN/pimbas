const prompt = require("prompt-sync")()

let lista =[
    ["dudu","lourenzo"],
    ["sampaio","carlos"],
    ["louren","gege"]
]
let concatenar = lista.reduce((inicio, valor) => {
    return inicio.concat(valor)
}, [])

console.log(concatenar)