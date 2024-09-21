const prompt = require("prompt-sync")()
const produtos = [
    { nome: "game", preco: 150, categoria: 'eletronicos' },
    { nome: "sofa", preco: 800, categoria: 'moveis' },
    { nome: "controle", preco: 250, categoria: 'eletronicos' },
    { nome: "camiseta", preco: 80, categoria: 'roupas' },
];

const escolha = prompt("escolha a categoria(eletronicos,moveis,roupas): ")

const filtro = produtos.filter(produto => produto.categoria === escolha)

console.log(filtro)