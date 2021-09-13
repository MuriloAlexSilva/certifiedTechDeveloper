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
console.log(`O numero da conta é ${conta4.conta} e o tipo seria ${conta4.tipoConta} com o saldo de R$${conta4.saldo} e o titular é ${conta4.titular}`);
console.log(`O numero da conta é ${conta5.conta} e o tipo seria ${conta5.tipoConta} com o saldo de R$${conta5.saldo} e o titular é ${conta5.titular}`);
console.log(`O numero da conta é ${conta6.conta} e o tipo seria ${conta6.tipoConta} com o saldo de R$${conta6.saldo} e o titular é ${conta6.titular}`);
console.log(`O numero da conta é ${conta7.conta} e o tipo seria ${conta7.tipoConta} com o saldo de R$${conta7.saldo} e o titular é ${conta7.titular}`);
console.log(`O numero da conta é ${conta8.conta} e o tipo seria ${conta8.tipoConta} com o saldo de R$${conta8.saldo} e o titular é ${conta8.titular}`);
console.log(`O numero da conta é ${conta9.conta} e o tipo seria ${conta9.tipoConta} com o saldo de R$${conta9.saldo} e o titular é ${conta9.titular}`);
console.log(`O numero da conta é ${conta10.conta} e o tipo seria ${conta10.tipoConta} com o saldo de R$${conta10.saldo} e o titular é ${conta10.titular}`);

//Lista de Todas as contas
let listaClientes = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10]


let banco = {
    clientes:listaClientes,
    consultarCliente:function(nome) {
        for (let i = 0; i < this.clientes.length; i++) {
           let cliente = this.clientes[i];
           if (cliente.titular === nome) {
               console.log(cliente);
               return cliente;
           }
            
        }
    },
    depositar:function(nome, deposito) {
        for (let i = 0; i < this.clientes.length; i++) {
            let cliente = this.clientes[i];
            if (cliente.titular === nome) {
               cliente.saldo += deposito;
               console.log(cliente);
               return cliente 
            }
             
         }
    },
    sacar:function(nome, deposito) {
        for (let i = 0; i < this.clientes.length; i++) {
            let cliente = this.clientes[i];
            if (cliente.titular === nome) {
               cliente.saldo -= deposito;
               console.log(cliente);
               return cliente 
            }
             
         }
    }
}
banco.consultarCliente('Bendite Huggett')
banco.depositar('Bendite Huggett',400)
banco.sacar('Bendite Huggett',1400)



