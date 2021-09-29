//Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 
//Crie um construtor para ele e importe-o como o módulo aluno.
function Aluno (_nome, _qtddFaltas, _notas){
    this.nome = _nome;
    this.qtddFaltas = _qtddFaltas;
    this.notas = _notas;
    console.log(`Seu nome é ${this.nome} e possui ${this.qtddFaltas} faltas e suas notas são ${this.notas}`);
    //funções aqui
    function calcularMedia(this.notas) {
        let contadorNotas = 0;
        let somaDasNotas = 0;
    
        for (let i = 0; i < notas.length; i++) {
            if (notas[i]) {
                contadorNotas++;
                somaDasNotas += notas[i];
          
            }
            
        }
    
        let media = somaDasNotas/contadorNotas;
        return media;
    }
    console.log(calcularMedia())

}



module.exports = {
    Aluno: Aluno
}