let teste = 'Nova linha de teste';

console.log(`Vamos começar um novo teste,
    ${teste},
    Concluimos aqui!!
`)
//Qdo utilizamos a crase, a quebra de linha do codigo acima, também aparece 
//no codigo abaixo


//-----------------------------------------------------------------------
// Push
let teste1 = [0,1,2,3,4,5,6];
console.log(teste1);
teste1.push(7);
console.log(teste1);
teste1.unshift(17);
console.log(teste1);
teste1.pop();
console.log(teste1);
teste1.shift();
console.log(teste1);
teste1.slice();
console.log(teste1);
teste1.splice(3);
console.log(teste1);

//---------------------------------
let teste3 = [0,1,2,3,4,5,6,7,8];
teste3.reverse();
console.log(teste3);

teste3.sort();
console.log(teste3);


// O indexOf retorna o primeiro valor encontrado no Array
// já o lastIndexOf retorna o ultimo valor encontrado no Array
// ---Isto seria para os casos de valores repetidos dentro do array


let teste4 = [0,1,2,3,4,5,6];
console.log(teste4.indexOf(6))// Consulta o item dentro do () no array mencionado
let string = teste4.indexOf(7) == -1 ? 'Não existe este numero no array': teste4.indexOf(7);
//Qdo não encontra o valor, o indexOf retorna -1, neste caso estou mencionando
// que se der -1 irá aparecer a mensagem de Não existe este numero no array
console.log(string)


//---------------------------------------------------------------------------------------------
