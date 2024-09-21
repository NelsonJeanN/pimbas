const prompt = require("prompt-sync")()

const baguios = [
    { nome: "a", preco: 1, categoria: "ala" },
    { nome: "b", preco: 2, categoria: "ala" },
    { nome: "c", preco: 3, categoria: "oi" },
    { nome: "d", preco: 4, categoria: "gogo" }
]
let cate = baguios.reduce((conta, produto) => {
    if (conta[produto.categoria]) {
        conta[produto.categoria]++
    }else{conta[produto.categoria]= 1
    }
    return conta
}, {})

console.log(baguios)
console.log(cate)