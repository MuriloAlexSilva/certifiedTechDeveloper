function Pessoa(_altura,_sexo,_nome){
    this.altura = _altura
    this.sexo = _sexo
    this.nome = _nome
  }
let pessoas = [];
for (let i = 0; i <=15; i++) {
  let numeroAleatorio = Math.random() + 1;
  let altura = numeroAleatorio;
  let sexo = altura < 1.5 ? 'F' : 'M';
  let nome = 'Pessoa' + i;
  const pessoa = new Pessoa(altura.toFixed(2),sexo,nome);
  pessoas.push(pessoa);
  
}
console.log(pessoas);