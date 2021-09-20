//Primeiro tipo de exemplo de modulo
// function teste(a,b) {
//     console.log("Bem Vindo ao Modulo");
//     let soma = a+b;
//     console.log(`A soma de A + B é = ${soma}`);
//     let multiplicacao = a*b;
//     console.log(`A multiplicação de A * B é = ${multiplicacao}`);

// }
// module.exports = teste;

//Outro exemplo de Modulo
module.exports = {
    teste1: function (a, b) {
        console.log("Bem Vindo ao Modulo");
        let soma = a + b;
        console.log(`A soma de A + B é = ${soma}`);
    },
    teste2: function (a, b) {
        console.log("Bem Vindo ao Modulo");
        let multiplicacao = a * b;
        console.log(`A multiplicação de A * B é = ${multiplicacao}`);
    },
    teste3:[1,2,3,4,'Teste Concluido']
}
module.exports.teste4 = {
   funcao: function () {
        console.log('Este é o exemplo 4');
    }
}