/*const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados);*/


//array com objetos
const pessoas = [
  { nome: 'luiz', idade: 62},
  { nome: 'marcos', idade: 63},
  { nome: 'cara', idade: 42},
  { nome: 'luan', idade: 62},
  { nome: 'hugo', idade: 92},
  { nome: 'luana', idade: 12},
];

//const pessoasComNomeGrande = pessoas.filter (valor =>  valor.nome.length >= 6);
//const pessoasComIdadeAvancada = pessoas.filter (valor =>  valor.idade >50);
const pessoasTerminaComA = pessoas.filter(valor  => valor.nome.toLowerCase( ).endsWith('a'))
console.log(pessoasTerminaComA);