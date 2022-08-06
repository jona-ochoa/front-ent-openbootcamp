// Formas de importar y exportar modulos
// 1.. CommonJS - require
// 2.  Import ES6 - import



// const moduloMath = require('./modulo/math')
const {factorial, suma} = require('./modulo/math')
// console.log(moduloMath.eleva)
const fact = factorial(5)
console.log(fact)

const sum = suma(15, 90)
console.log(sum)