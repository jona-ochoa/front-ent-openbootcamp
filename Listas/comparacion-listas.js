// Como podemos compara listas
// .every()

const array = [ 4, 6, 7, 87, 56, 23, -45, -23, 0 ]

// const resultado = array.every(valor => {
//     if ( valor < 0) {
//         return true
//     }
// })

const resultado = array.every(valor => valor > 0)

console.log(resultado)

// Comparacion de listas 
const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]
console.log(ar1 === ar2)

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res;
}
console.log(compararArrays(ar1, ar2))
