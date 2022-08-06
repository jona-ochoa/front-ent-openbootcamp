import { suma, eleva, nombre } from './modulos/math.js'
import getAutor, {libro} from './modulos/literatura.js';
const sum = suma(4,5);
console.log(sum)
const potencia = eleva(2,3)
console.log(potencia)

console.log(nombre)

console.log(libro)
console.log(getAutor())