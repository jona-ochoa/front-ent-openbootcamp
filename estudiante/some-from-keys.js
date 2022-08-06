// como saber si cumple la condicion 
// .some()

const array = [3,7,9,4,7,0, -2]

const res = array.some(valor => valor < -0)
console.log(res)

const existe = array.some(valor => valor === 9)
console.log(existe)

const listaObjetos = [
    {nombre:"Lucia", age:23},
    {nombre:"Jesus", age:33},
    {nombre:"Maria", age:15},
    {nombre:"Jose", age:43}
]

const existeJesus = listaObjetos.some(persona => persona.nombre === "Lucia")
console.log(existeJesus)

// Como obtener una lista a partir de un objeto iterable por ejemplo los Strings

const str = "Hola soy Jonatan"
console.log(str[9])

const ar_str = Array.from(str) 
console.log(ar_str)

const set = new Set([2,3,4, "Hola", 5])
const ar_set = Array.from(set)
console.log(set)

const keys = array.keys()
console.log(typeof keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)