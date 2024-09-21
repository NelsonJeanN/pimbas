const prompt = require("prompt-sync")()

let nome = prompt("coloque o nome aqui: ")
let nomes = ["nelson","julia","alberto","vinicius","leandro",'helio','william',"gerson","alicia","pimbas"]

let confirm = nomes.some(nomes => nome == nomes)
if (confirm){
    console.log("ACHEI")
}else{
    console.log("NAO ACHEI")
}