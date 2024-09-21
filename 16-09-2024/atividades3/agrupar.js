const prompt = require("prompt-sync")()
const produtos = [
    { nome: "item 1", preco: 30 },
    { nome: "item 2", preco: 40 },
    { nome: "item 3", preco: 50 },
    { nome: "item 4", preco: 60 },
    { nome: "item 5", preco: 70 },
]

const grupos = produtos.reduce((itens, produto) => {
    if (produto.preco > 50) {
        itens.mais.push(produto)
    } else {
        itens.menos.push(produto)
    }
    return itens
}, { mais: [], menos: [] })

console.log(grupos)