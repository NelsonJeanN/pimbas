const prompt = require("prompt-sync")()
const nomes = ['Ana', 'João', 'Pedro'];

const objetoNomes = nomes.reduce((conta, nome) => {
  conta[nome] = nome.length;
  return conta;
}, {});

console.log(objetoNomes);