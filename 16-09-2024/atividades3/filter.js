const prompt = require("prompt-sync")()
let valor = Number(prompt("Coloque o valor: "))
let produto = [
    {nome : "xbox",preco : 2000, categoria : "eletronico"},
    {nome : "playstation", preco : 2500, categoria : "eletronico"},
    {nome : "urso" , preco : 80,categoria : "brinquedo"},
    {nome : "polo", preco : 60 ,  categoria : "roupa"}
]

let tenta = produto.filter(
    produto => produto.categoria == "eletronico" &&  produto.categoria == "brinquedo" && produto.categoria == "roupa" || produto.preco > valor
)
console.log(tenta)
