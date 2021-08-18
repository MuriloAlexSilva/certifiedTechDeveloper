
//Polegada para centimetro - 1 
function polegadaParaCentimetro(numA) {
    var resultado = numA * 2.54;
    return console.log(numA + ' polegada será ' + resultado + ' em centimetro.');
}
polegadaParaCentimetro(2);

//String para URL - 2
function stringParaUrl(stringA) {
    return console.log('http://www.' + stringA + '.com.br');
}
stringParaUrl('digitalhouse');

//  String com Caractere -3
function stringComCaractere(stringA) {
    return console.log(stringA + '!');
}
stringComCaractere("Alerta");

//idade dos Cachorros -4
function idadeCachorro(idade) {
    let idadeCachorro = idade * 7;
    return console.log('Seu dog possui ' + idadeCachorro + ' anos em idade humana!!!');
}
idadeCachorro(5);

//Calculo hora de trabalho -5
function horaTrabalho(salario) {
    let valorHora = salario / 160;
    return console.log('Seu salário é R$' + salario + ',00 e o valor da sua hora é R$' + valorHora + ',00');
}
horaTrabalho(1600);

//Calculo imc -6
function calculoImc(peso, altura) {
    altura = altura / 100;
    let imc = peso / (altura * altura);
    return console.log('Seu IMC é ' + imc.toFixed(2));
}
calculoImc(80, 170);

//String para Maiuscula -7
function stringMaiuscula(string) {
    return console.log(string.toUpperCase());
}
stringMaiuscula('murilo');

//Tipo de dado - 8
function tipoDeDado(dado) {
    return console.log(typeof dado);
}
tipoDeDado('texto');

//Digite o raio de um circulo - 9
function circunferencia(raio) {
    return console.log(2 * Math.PI * raio);
}
circunferencia(10);