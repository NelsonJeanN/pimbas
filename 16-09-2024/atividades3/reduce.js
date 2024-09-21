const prompt = require("prompt-sync")()

let trabalhos = [
    {nome : "nelson" , idade : 20 ,profissao:"desempregado"},
    {nome : "jao" , idade : 21,profissao: "papel"},
    {nome : "maria" , idade : 25,profissao: "prostituta"}
]
let somaIdades = trabalhos.reduce((total,trabalho)  => total + trabalho.idade , 0)

let total = somaIdades /trabalhos.length
console.log(total)
