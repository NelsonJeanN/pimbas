const prompt = require("prompt-sync")()
const pessoas = [
    { nome: 'Alice', idade: 30 },
    { nome: 'Bob', idade: 25 },
    { nome: 'Carlos', idade: 35 }
]

const pessoas2 = pessoas.map(pessoa => `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`)
console.log(pessoas)
console.log(pessoas2)