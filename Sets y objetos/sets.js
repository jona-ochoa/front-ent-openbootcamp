// Sets o Conjuntos (en Castellano)

const array = [1,2,3,4,5]

const mySet = new Set(array)
console.log(mySet)
mySet.add(9)
console.log(mySet)

// ..Delete()
mySet.delete(3)
console.log(mySet)

// .Has()
// console.log(array.includes(2));
console.log(mySet.has(2))

// .Size()
console.log(mySet.size)

mySet.forEach(valor => {
    console.log(valor)
})

const it_mySet = mySet.values()
console.log(it_mySet)

// Con metodo de Proágación
const ar_mySet = [... mySet]
console.log(ar_mySet)
console.log(ar_mySet[0])
console.log(ar_mySet[4])


// .Clear()
mySet.clear()
console.log(mySet);