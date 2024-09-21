const prompt = require("prompt-sync")()


const n = 3;
const matrizIdentidade = [];

for (let i = 0; i < n; i++) {
    matrizIdentidade[i] = [];
    for (let j = 0; j < n; j++) {
      
        if (i === j) {
            matrizIdentidade[i][j] = 1;
        } else {
            matrizIdentidade[i][j] = 0;
        }
    }
}

console.log(matrizIdentidade);

























