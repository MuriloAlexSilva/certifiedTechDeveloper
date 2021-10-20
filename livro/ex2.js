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

let teste4 = [0,1,2,3,4,5,6];
console.log(teste4.indexOf(0))
let string = teste4.indexOf(2) == -1 ? 'Não existe este numero': teste4.indexOf(2);
console.log(string)