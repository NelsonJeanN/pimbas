const prompt = require("prompt-sync")()
while (true) {
    let pergunta = Number(prompt("Digete o numero para descobrir se é par ou impar(numero 0 ou negativo encerra o programa): "))
    if (pergunta <= 0) {
        console.log(`Encerrado.`)
        break
    }
        if (pergunta % 2 === 0) {
            console.log(`O numero ${pergunta} é par.`)
            continue
        }
    else {
        console.log(`O numero ${pergunta} é impar.`)
    }
}