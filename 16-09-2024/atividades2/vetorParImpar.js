const prompt = require("prompt-sync")()

let n = Number(prompt("Digite o tamanho do vetor: "))

let vetor = []

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        vetor.push("Par")
    } else {
        vetor.push("Ímpar")
    }
}

console.log("Vetor: " , vetor);
