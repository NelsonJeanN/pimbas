const prompt = require("prompt-sync")()

const pessoas = [
    { nome: "araujo", idade: 40 },
    { nome: "cristian", idade: 21 },
    { nome: "charles", idade: 34 },
    { nome: "chukcy", idade: 22 }
];

const velho = pessoas.reduce((velha, atual) => {
    if (atual.idade > velha.idade) {
        return atual
    } else {
        return velha
    }
})

console.log(velho)