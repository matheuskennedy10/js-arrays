const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7];
const total = numeros.reduce(function(acomulador, valor, indice, array) {
if (valor % 2 === 0 ) acomulador.push(valor);
return acomulador;
});
console.log(total);