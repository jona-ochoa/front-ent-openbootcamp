// Funciones de tipo flecha - funciones anonimas

const array = [1,5,7,3,6]
const array2 = array.map((valor) => valor * 2)
console.log(array2)

const dobleValor = valor => valor * 2
console.log(dobleValor(6))

const array3 = array.map(dobleValor)

console.log(array3)