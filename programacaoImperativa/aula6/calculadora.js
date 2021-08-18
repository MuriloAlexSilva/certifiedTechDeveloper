function adicionar(numA, NumB) {
    let adicionar = numA + NumB;
    return adicionar;
}

function diminuir(numA, NumB) {
    let diminuir = numA - NumB;
    return diminuir;
}

function multiplicacao(numA, NumB) {
    let multiplicacao = numA * NumB;
    return multiplicacao;
}

function divisao(numA, NumB) {
    let divisao = numA / NumB;
    return divisao;
}


console.log ("-------------- Teste de Operações / Calculadora --------------");
console.log("Agora vou testar as funções de soma e subtração");
console.log(adicionar(5,3));
console.log(diminuir(5,3));
console.log("Agora vou testar a função de multiplicação");
console.log(multiplicacao(5,3));
console.log("Agora vou testar a função de divisão");
console.log(divisao(5,3));
console.log("Agora vou testar a função de divisão com o valor de zero em um dos parametros");
console.log(divisao(5,0));

function quadradoDoNumero(numA) {
  let quadradoDoNumero = multiplicacao(numA,numA);
    return quadradoDoNumero;
}
console.log(quadradoDoNumero(2));

function mediaDeTresNumeros(numA,numB,numC) {
    let soma = adicionar(numA,numB);
    soma = adicionar(soma,numC);
    mediaTres = soma/3;
    return mediaTres;
}
console.log(mediaDeTresNumeros(2,2,2));