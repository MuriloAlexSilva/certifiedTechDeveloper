//Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
//Crie um construtor para ele e importe-o como o módulo aluno.
function Aluno (_nome, _qtddFaltas, _notas){
    this.nome = _nome;
    this.qtddFaltas = _qtddFaltas;
    this.notas = _notas;
    `Seu nome é ${this.nome} e possui ${this.qtddFaltas} faltas e suas notas são ${this.notas}`
    //funções aqui

}



module.exports = {
    Aluno: Aluno
}