let alunos = [{nome:'Bruno', nota: 7},{nome:'Evellyn', nota: 4},{nome:'Yara', nota: 6},{nome:'Bruna', nota: 2},{nome:'João', nota: 5},{nome:'Maria', nota: 10},{nome:'Bianca', nota: 2},{nome:'Gian', nota: 10},{nome:'Leandro', nota: 5}];
const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6)

console.log(alunosAprovados)