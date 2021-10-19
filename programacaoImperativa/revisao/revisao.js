//Função construtora para utilizar 
function Pessoa(_altura, _sexo, _nome,_idade,_opiniao) {
    this.altura = _altura;
    this.sexo = _sexo;
    this.nome = _nome;
    this.idade = _idade;
    this.opiniao = _opiniao;
   
}

let pessoas = [];
for (let i = 0; i <= 10; i++) {
    let numeroAleatorio = Math.random(); 
    let altura = numeroAleatorio + 1;//Seria para gerar um numero aleatorio de altura (estamos somente o 1 para ficar 1m e pouco)
    altura = Number(altura.toFixed(2))//Para transforma em Number 
    let nome = 'Pessoa' + i; //estamos concatenando o Pessoa com o i para ficas assim Pessoa0-Pessoa1 e assim por diante
    let sexo = altura < 1.50 ? 'F' : 'M';
    
    let opiniao = numeroAleatorio < 0.33 ? 'Ótimo' : numeroAleatorio >= 0.33 && numeroAleatorio < 0.66 ? 'Bom' : 'Regular';
    //Acima seria se nA < 0.33 será 1 senão, verificar se nA >=0.33 e < 0.66 será 2 e se não for nenhum destes será 3
    let idade = ((100-12)*numeroAleatorio + 12).toFixed(0);//retorna o valor em String
    idade = Number(idade);//Seria para transformar de String para number
    pessoas.push(new Pessoa(altura,sexo,nome,idade,opiniao));
}
console.log(pessoas);

function mediaDaIdadePessoasOtimo(array) {
    let contadorOtimo = 0;
    let somaDasIdades = 0;

    for (let i = 0; i < array.length; i++) {
        if (array._opiniao == 'Ótimo') {
            contadorOtimo++;
            somaDasIdades += array.idade;
      
        }
        
    }

    const media = somaDasIdades/contadorOtimo;
    console.log(media);
}
mediaDaIdadePessoasOtimo(pessoas);