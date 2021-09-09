function ContaBancaria(mConta,mTipoConta,mSaldo,mTitular) {
    this.conta = mConta;
    this.tipoConta = mTipoConta;
    this.saldo = mSaldo;
    this.titular = mTitular;
}

let conta1 = new ContaBancaria(5486273622,'Conta Corrente',27771,'Abigael Natte');
let conta2 = new ContaBancaria(1183971869,'Conta Poupança',8675,'Ramon Connell');
let conta3 = new ContaBancaria(9582019689,'Conta Poupança',27363,'Jarret Lafuente');
let conta4 = new ContaBancaria(1761924656,'Conta Poupança',32415,'Ansel Ardley');
let conta5 = new ContaBancaria(7401971607,'Conta Poupança',18789,'Jacki Shurmer');
let conta6 = new ContaBancaria(630841470,'Conta Corrente',28776,'Jobi Mawtus');
let conta7 = new ContaBancaria(4223508636,'Conta Corrente',2177,'Thomasin Latour');
let conta8 = new ContaBancaria(185979521,'Conta Poupança',25994,'Lonnie Verheijden');
let conta9 = new ContaBancaria(3151956165,'Conta Corrente',7601,'Alonso Wannan');
let conta10 = new ContaBancaria(2138105881,'Conta Poupança',33196,'Bendite Huggett');

console.log(`O numero da conta é ${conta1.conta} e o tipo seria ${conta1.tipoConta} com o saldo de R$${conta1.saldo} e o titular é ${conta1.titular}`);
console.log(`O numero da conta é ${conta2.conta} e o tipo seria ${conta2.tipoConta} com o saldo de R$${conta2.saldo} e o titular é ${conta2.titular}`);
console.log(`O numero da conta é ${conta3.conta} e o tipo seria ${conta3.tipoConta} com o saldo de R$${conta3.saldo} e o titular é ${conta3.titular}`);


// let listaClientes = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10]

// let banco = {
//     clientes = listaClientes
// }

