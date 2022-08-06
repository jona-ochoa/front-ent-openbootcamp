// Qué son las funciones como se declaran y como se utilizan
const nom = "Gorka"
// saludar("Jona")
saludar(nom)
function saludar(nombre){
    console.log(`hola ${nombre}`)
}

///// En que consiste los parametros

let nombre_2 = "Jose"
despedir(nombre_2)
function despedir(nombre){
    nombre = "Mario"
    console.log(`Adios ${nombre}`)
}

/////
let persona = {nombre:"Juan",apellido:"Gonzalez"}
console.log(persona)

saludarPersona(persona)
function saludarPersona(objeto){
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
} 

function imprimeNumero(numero = 7){ //parametros por defecto
    console.log(numero)
}
imprimeNumero(9)

// Definir objetos con parametros indeterminados

function imprimir( ...parametros ){
    console.log(parametros)
}

imprimir(1,2,3,4,5)

///////
function suma( ...nums ) {
    return nums.reduce((a,b) => a + b)
}    
const s = suma(1,2,3,4)
console.log(s)

function multiplicar(a=0, b=0) {
    return a * b
}
console.log(multiplicar(4,6))