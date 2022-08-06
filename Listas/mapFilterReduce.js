//Trabajar con metodos avanzados
// .map() .filter() .reduce()

const array = ["San Sebastian", "Madrid", "Barcelona", "Jesús María CBA"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val)

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

const listaObj = [
    {nombre:"Lucia", age:23},
    {nombre:"Jesus", age:33},
    {nombre:"Maria", age:15},
    {nombre:"Jose", age:43}
]
// const personasMayores = listaObj.filter(obj => {
//     if (obj.age > 30){
//         return true;
//     } else {
//         return false;
//     }
// })
const personasMayores = listaObj.filter(obj => obj.age >30)
console.log(personasMayores)

const nuevaLista = listaObj.filter(obj => obj.nombre !== "Lucia")
console.log(nuevaLista)

const valores = [2,4,6,8,10]
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)