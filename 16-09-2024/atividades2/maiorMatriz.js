const prompt = require("prompt-sync")()

let numeros = [
    [1,2,3],
    [4,5,6]
]
let maior = 0
console.log(numeros)
for (let i = 0; i < numeros.length; i++) {
  for  (let j = 0; j < numeros[i].length; j++){
        if ( numeros[i][j] > maior ) {
            maior = numeros[i][j];
    }
   
   }
}
console.log(`maior: ${maior}`)