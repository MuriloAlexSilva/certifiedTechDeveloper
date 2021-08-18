let nome = ['José da Silva', 'Carlos de Souza', 'Aline Ferreira', 'Ana Paula'];
let idade = [27, 28, 33, 26];
let peso = [83.5, 80.1, 63.7, 55.0];
let altura = [1.70, 1.76, 1.53, 1.62];
let plano = ['Ouro', 'Diamante', null, 'Prata'];

console.log(nome[0] + ' tem ' + idade[0] + ' anos e seu índice de massa corporal é de ' + imc(peso[0], altura[0]).toFixed(2) + ' com o plano ' + plano[0]);
console.log(nome[1] + ' tem ' + idade[1] + ' anos e seu índice de massa corporal é de ' + imc(peso[1], altura[1]).toFixed(2) + ' com o plano ' + plano[1]);
console.log(nome[2] + ' tem ' + idade[2] + ' anos e seu índice de massa corporal é de ' + imc(peso[2], altura[2]).toFixed(2) + ' com o plano ' + plano[2]);
console.log(nome[3] + ' tem ' + idade[3] + ' anos e seu índice de massa corporal é de ' + imc(peso[3], altura[3]).toFixed(2) + ' com o plano ' + plano[3]);

function imc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}