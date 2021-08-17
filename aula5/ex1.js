
//Polegada para centimetro
function polegadaParaCentimetro(numA) {
    var resultado = numA * 2.54;
    return console.log(numA + ' polegada será ' + resultado + ' em centimetro.');
}
polegadaParaCentimetro(2);

//String para URL
function stringParaUrl(stringA) {
    return console.log('http://www.' + stringA + '.com.br');
}
stringParaUrl('digitalhouse');

//  String com Caractere
function stringComCaractere(stringA) {
    return console.log(stringA + '!');
}
stringComCaractere("Alerta");

//idade dos Cachorros
function idadeCachorro(idade) {
    let idadeCachorro = idade * 7;
    return console.log('Seu dog possui ' + idadeCachorro + ' anos em idade humana!!!');
}
idadeCachorro(5);

//Calculo hora de trabalho
function horaTrabalho(salario) {
    let valorHora = salario / 160;
    return console.log('Seu salário é R$' + salario + ',00 e o valor da sua hora é R$' + valorHora + ',00');
}
horaTrabalho(1600);

//Calculo imc
function calculoImc(peso, altura) {
    altura = altura / 100;
    let imc = peso / (altura * altura);
    return console.log('Seu IMC é ' + imc.toFixed(2));
}
calculoImc(80, 170);
