const prompt = require("prompt-sync")();


let matriz = []

for (let i = 0;i < 3;i++){
    matriz[i] = []
    for (let j = 0;j < 3 ; j++){
        if (j === 2 - i){
            matriz[i][j] = 1
        }else{
            matriz[i][j] = 0
        }
        }
}

console.log(matriz)