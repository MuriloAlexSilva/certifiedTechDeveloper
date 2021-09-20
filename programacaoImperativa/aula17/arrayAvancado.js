
//.map()
let numeros = [2,4,6];

let dobro = numeros.map(num => num*2);
console.log(dobro);//retorna o dobro pq * acima por 2


//.filter()
let idades = [22,8,17,14,30];

let maiores = idades.filter(idade => idade > 18);
console.log(maiores);//retorna as idades acima de 18


//.reduce()
let numeros2 = [5,7,16];

let soma = numeros2.reduce((acumulador,numero) => acumulador+numero);
/*-----------------------------/\---------/\
    Seria a execução abaixo
    acumulador+numero
    0+5
    acumulador+numero
    5+7
    acumulador+numero
    12+16
    28
*/
console.log(soma);


//.forEach()
let paises = ['Brasil','Cuba','Peru'];
paises.forEach(pais => console.log(pais));//Separa o array


//Outro modelo de forEach com o indice
console.log('Outro modelo de .forEach');
let teste = [1,2,3,4,5];
teste.forEach(function (elemento,indice) {
    console.log("Elemento: " + elemento + " indice: " + indice);
})



//.slice()
let numeros3 = [3,4,5,6,7];
let subarray = numeros3.slice(1,-2);
console.log(subarray);//Corta o array, (1º,2º) - 1ºindice a iniciar no array -- 2º indice para acabar no array, 
//se for negativo irá diminuir de trás para frente e se for positivo seria o numero do indice do array


//.sort()
let marcas = ['samsung','xiaomi','apple'];
marcas.sort();//Coloca em ordem alfabetica ou numerica
console.log(marcas);


//.includes()
let inclusao = [1,5,6,7,2,9];
let incluir = inclusao.includes(5,0);
console.log(incluir);
let incluir2 = inclusao.includes(5,2);
console.log(incluir2);

//.find()
let exemplo = [
    {nome: 'Bitcoin',simbolo: 'BTC'},
    {nome: 'Ethereum',simbolo: 'ETH'},
    {nome: 'Cardano',simbolo: 'ADA'},
]
console.log(exemplo.find(moeda => moeda.nome ==='Bitcoin'));
