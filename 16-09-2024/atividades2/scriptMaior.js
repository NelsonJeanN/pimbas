const prompt = require("prompt-sync")()

let numeros = [12, 32, 54, 76, 1,3]
let maior = 0;

console.log(numeros)
for (let i = 0; i < numeros.length; i++) {
   if ( numeros[i] > maior ) {
      maior = numeros[i];
   }
}
console.log(`maior: ${maior}`)