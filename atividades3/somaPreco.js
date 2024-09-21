const prompt = require("prompt-sync")()

const produtos = [
    { nome: "maqueico", preco: 18 },
    { nome: "leite", preco: 12 },
    { nome: "cigarro", preco: 8 }
]

const soma = produtos.reduce((conta, produto) => {
    return conta + produto.preco
}, 0)

console.log(`A soma dos preços é: R$ ${soma.toFixed(2)}`)