let lista = require('./index');
let aluno = require('./aluno');

let alunoAnderson = new aluno.Aluno('Anderson', 3, [10, 10, 10, 10]);

let alunoElivelton = new aluno.Aluno('Elivelton', 3, [9, 8, 9, 9]);

let curso = {
    nomeDoCurso: "",
    notaDeAprovacao: 7,
    faltasMaximas: 6,
    listaDeEstudantes: lista.listaDeEstudantes,
    //Metodo para add alunos novos
    addAlunos: function (aluno) {
        this.listaDeEstudantes.push(aluno)
    },
    //Metodo para verificar aprovação do aluno
    aprovacao: function (_aluno) {
    
        for (let i = 0; i < this.listaDeEstudantes.length; i++) {
            if (_aluno == curso.listaDeEstudantes[i].nome) {
                if(curso.listaDeEstudantes[i].calcularMedia() >= this.notaDeAprovacao && curso.listaDeEstudantes[i].qtddFaltas < this.faltasMaximas){
                    console.log(`${curso.listaDeEstudantes[i].nome}, você está Aprovado`);
                    return true;
                }else if(curso.listaDeEstudantes[i].calcularMedia() > 1.1* this.notaDeAprovacao && curso.listaDeEstudantes[i].qtddFaltas == this.faltasMaximas){
                    console.log(`${curso.listaDeEstudantes[i].nome}, você está Aprovado`);
                    return true;
                }else{
                    console.log(`${curso.listaDeEstudantes[i].nome}, você está Reprovado`);
                    return false;
                }
            }
        }
    },
    listaSituacaoEstudantes: function () {
        let lista = []
        for (let i = 0; i < this.listaDeEstudantes.length; i++) {
            lista.push(this.aprovacao(this.listaDeEstudantes[i].nome));
        }
        return lista;
      
    }
}
//Impressão de um item da lista
console.log(curso.listaDeEstudantes[0])
//Metodo para add alunos novos
curso.addAlunos(alunoAnderson)
curso.addAlunos(alunoElivelton)

//Para buscar o aluno aprovado, deverá ser inserido o nome entre '' dentro de curso.aprovacao()
curso.aprovacao('Murilo')

//Para verificar a situação dos alunos do curso 
console.log(curso.listaSituacaoEstudantes())

