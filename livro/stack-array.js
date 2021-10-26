class Stack {
    constructor(){
        this.items = [];
    };
    //Metodo para add item na pilha(array)
    push(element){
        this.items.push(element);
    };
    //Metodo para remover item na pilha(array)
    pop(){
        return this.items.pop();
    };
    //Metodo para consultar o ultimo item da pilha(array)
    peek(){
        return this.items[this.items.length - 1];
    };
}