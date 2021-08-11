//const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8 ];
//const numerosEmDobro = numeros.map(valor => valor *2);
//onsole.log(numerosEmDobro);

const pessoas = [
  { nome: 'luiz', idade: 62},
  { nome: 'marcos', idade: 63},
  { nome: 'cara', idade: 42},
  { nome: 'luan', idade: 72},
  { nome: 'hugo', idade: 92},
  { nome: 'luana', idade: 12},
];

const elementPessoa = pessoas.map(valor => valor.nome);
const idade = pessoas.map(valor => valor.idade)

const comIds = pessoas.map(function(valor, indice) {
  const newValor = {...valor };
  newValor.id = indice;
  return newValor;
});

//console.log(comIds);
console.log(comIds);