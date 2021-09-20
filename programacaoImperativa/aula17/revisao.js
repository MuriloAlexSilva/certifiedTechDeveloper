let numeros = [1,2,3,4,5,6,7];

for (let i = 0; i < numeros.length; i++) {
let numero = numeros[i];
console.log(numero);
    
}

//Igual ao de cima, porém encurtado
//-------\/--------
for(let numero2 of numeros){
    console.log(numero2)
}

//Igual ao de cima, porém reverso
//-------\/--------
for(let numero2 of numeros.reverse()){
    console.log(numero2)
}