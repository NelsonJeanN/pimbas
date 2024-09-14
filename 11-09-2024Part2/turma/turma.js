const prompt = require("prompt-sync")()

    let quantidade = Number(prompt("Qual a quantidade de alunos: "))
if (quantidade <= 0){
    console.log("Ué não tem ninguém na turma?")
}else{
    let total = 0
    let conta = 0

    while(conta < quantidade){
    let nota = Number(prompt(`Qual a nota do aluno ${conta + 1}: `))
    if(nota < 0){
        console.log("Nota negativa tem certeza?")
    }else{
        total += nota
        conta++
    }
    }
    const media = total / quantidade
    console.log(`A média da turma é: ${media.toFixed(1)}`)
}
