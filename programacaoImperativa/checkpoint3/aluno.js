function Aluno(_nome, _qtddFaltas, _notas) {
    this.nome = _nome;
    this.qtddFaltas = _qtddFaltas;
    this.notas = _notas;
    console.log(`Seu nome é ${this.nome} e possui ${this.qtddFaltas} faltas e suas notas são ${this.notas}`);
    this.calcularMedia = function () {
        let contadorMedias = 0;
        let somaMedias = 0;

        for (let i = 0; i < this.notas.length; i++) {
            if (this.notas) {
                contadorMedias++;
                somaMedias += this.notas[i];
            }
        }
        let media = somaMedias / contadorMedias;
        console.log(`Sua média é ${media}`);
        return media
    }
    this.faltas = function () {
        this.qtddFaltas++;
        console.log(`Suas faltas aumentaram para ${this.qtddFaltas}`);
    }
}

module.exports = {
    Aluno: Aluno
}