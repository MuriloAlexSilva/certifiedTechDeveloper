function dividir(a,b) {
    if ((a == 0) || (b == 0)) 
    {
        let divisao = 'Não se pode dividir por zero';
        return divisao;
    }
    else
    {
        let divisao = a / b;
        return divisao;
    }
}
