let soma = (a, b) => a + b;

console.log(soma(5, 6));

let multDiv = (a, b) => {
    let mult = a * b;
    let div = a / b;
    console.log(`Multiplicação ${mult}`);
    console.log(`Divisão ${div}`);
}
multDiv(6, 4);

let horaAtual = () => {
    let data = new Date();
    return data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear() + ' ' +
        data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
}
console.log(horaAtual());

let print = mensagem => mensagem;
console.log(print('Olá, bom dia'));

setTimeout(()=> {console.log('this is the first message')},1000);//1000 (é medido em milisegundos) : seria 1s
setTimeout(()=> {console.log('this is the second message')},2000);//1000 (é medido em milisegundos) : seria 2s
setTimeout(()=> {console.log('this is the third message')},3000);//1000 (é medido em milisegundos) : seria 3s

//outro exemplo com for

for(let i = 1;i <= 10;i++){
    setTimeout(() => {console.log(`Estamos no segundo: ${i}`)},i*1000);
}