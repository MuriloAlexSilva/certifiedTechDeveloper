const aluno = require('./aluno');


let alunoMurilo = new aluno.Aluno('Murilo',5,[8,9,8,7]);
let alunoMaria = new aluno.Aluno('Maria',4,[8,9,9,7]);
let alunoLucas = new aluno.Aluno('Lucas',3,[9,8,6,7]);

alunoMurilo.calcularMedia()//Impressão da media
alunoMurilo.faltas()//Impressão da soma de novas faltas

let listaDeEstudantes = [alunoMurilo,alunoMaria,alunoLucas]

module.exports = {
    listaDeEstudantes
}