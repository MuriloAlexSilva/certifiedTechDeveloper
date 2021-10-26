// alert('Hello, World2');

var array = {
    teste: 123,
    name: 'Murilo'
}
console.log(array);
delete array.teste;// Serve para deletar uma propriedade do array
console.log(array);


//Modelo de Switch
var month = 'fev';

switch (month) {
    case 'jan':
        console.log('January');
        break;
    case 'fev':
        console.log('February');
        break;
    case 'mar':
        console.log('March');
        break;

    default:
        console.log('Is another month')
        break;
}
