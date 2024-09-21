const prompt = require("prompt-sync")()

const alunos = [
    { nome: 'Carlão', nota: 8 },
    { nome: "Nelson", nota: 6 },
    { nome: "Wilson Mendes", nota: 9 },
    { nome: "Donatelo", nota: 5 },
    { nome: "Cristiano Ronaldo", nota: 7.5 }
  ];
  
  const alunosAprovados = alunos.filter(aluno => aluno.nota > 7);
  
  console.log(alunosAprovados);