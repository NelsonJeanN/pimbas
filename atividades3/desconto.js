const prompt = require("prompt-sync")()

const produtos = [
    {nome:"dogao", preco: 8},
    {nome:"dogao g",preco:15},
    {nome:"dogao extra g",preco:22}
]
const desconto = 0.15

const prodesconto = produtos.map(produto =>({
    nome : produto.nome,preco: produto.preco * (1 - desconto.toFixed(2))
}))
console.log('preço original:')
console.log(produtos)
console.log('preço com 15% de desconto:')
console.log(prodesconto)