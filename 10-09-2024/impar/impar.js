const prompt = require("prompt-sync")()

let i = 1
let soma = 0
while (i <= 50){
 if (i % 2 !== 0){
    
    soma += i
 }
 
 i++;
}
console.log(`A soma de tudo é : ${soma}`)