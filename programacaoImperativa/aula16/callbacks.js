let somar = (a,b) => a+b;

let calculadora = (a,b,operacao) => operacao(a,b);

console.log(calculadora(5,6,somar));


let andar = () => 'O carro está andando';
let parar = () => 'O carro parou';

let acaoCarro = (acao) => acao();

console.log(acaoCarro(andar));
console.log(acaoCarro(parar));