function somar(a,b) {
    let soma = a + b;
    console.log(soma);
}

function subtrair(a,b) {
    let subtrair = a - b;
    console.log(subtrair);
}

function dividir(a,b) {
    if ((a == 0) || (b == 0)) 
    {
        let divisao = 'Não se pode dividir por zero';
        console.log(divisao);
    }
    else
    {
        let divisao = a / b;
        console.log(divisao);
    }
}

function multiplicar(a,b) {
    if ((a == 0) || (b == 0)) 
    {
        let multiplicacao = 0;
        console.log(multiplicacao);
    }
    else
    {
        let multiplicacao = a * b;
        console.log(multiplicacao);
    }
}

multiplicar (5,2);
dividir(6,3);
somar(5,2);
subtrair(6,4);