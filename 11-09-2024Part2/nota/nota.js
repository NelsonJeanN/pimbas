const prompt = require("prompt-sync")()

let continuar = true

while (continuar) {

const nota1 = Number(prompt("Coloque a Primeira nota: "))
const nota2 = Number(prompt("Coloque a Segunda nota: "))

const total = (nota1 + nota2) / 2

console.log("A média final é: " + total)

let resposta = prompt("Calcular a média de outro aluno? 1-sim 2-nao    ")
if (resposta !== "1") {
  continuar = false;
}
}