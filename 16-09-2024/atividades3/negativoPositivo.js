const prompt = require('prompt-sync')();

const matriz = [
    [-1, 2, 3],
    [4, -5, 6],
    [-7, 8, 9]
]

let soma = 0

for (const vetor of matriz) { 
    for (const num of vetor) { 
        if (num > 0) {
            soma += num 
        }
    }
}

console.log(`a soma dos positivos é: ${soma}`)