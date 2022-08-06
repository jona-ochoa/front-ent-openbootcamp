// Como ordenar Array metodo .sort()

const array = [2,13,43,64,8,9,0]
console.log(array)
array.sort((a,b) => {
    if ( a < b ) {
        return +1
    } else if ( a > b ) {
        return -1
    } else {
        return 0
    }
})
console.log(array)
// Ordenar unicamente arrays numéricos
const arrayNumerico = [4,7,8,23,65,1,0]
arrayNumerico.sort((a,b) => b - a)
console.log(arrayNumerico)
/////////////

// ¡¡¡ Interesante en arrays de objetos !!!

const listaObj = [
    {nombre:"Lucia", age:23},
    {nombre:"Jesus", age:33},
    {nombre:"Maria", age:15},
    {nombre:"Jose", age:43}
]

// listaObj.sort((a,b) => {
//     if (a.edad < b.edad) {
//         return -1
//     }
// })

listaObj.sort((a, b) => a.age - b.age)

console.log(listaObj)