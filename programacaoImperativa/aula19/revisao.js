// Objeto Literal
let meuObjeto = {
    prop: 1,
    prop1: [4,5,6,7],
    prop3: 1,
    func1: function () {
        let soma = 0;
for(let prop of this.prop1){
    soma = soma + prop;
}
    }
}
//Função Construtora
function Aluno(_nome, _qtddFaltas, _notas) {
    this.nome = _nome;
    this.qtddFaltas = _qtddFaltas;
    this.notas = _notas;
    console.log(`Seu nome é ${this.nome} e possui ${this.qtddFaltas} faltas e suas notas são ${this.notas}`);
    this.func1 = function () {
        console.log('teste');
    }
    // funções aqui
    // function calcularMedia(this.notas) {
    //     let contadorNotas = 0;
    //     let somaDasNotas = 0;

    //     for (let i = 0; i < notas.length; i++) {
    //         if (notas[i]) {
    //             contadorNotas++;
    //             somaDasNotas += notas[i];

    //         }

    //     }

    //     let media = somaDasNotas/contadorNotas;
    //     return media;
    // }
    // console.log(calcularMedia())

}