class Persona {

    // Private
    // Solo se puede acceder desde dentro de la clase
    #nombre
    #edad
    // #obtenEdad
    _isDeveloper = true;

    constructor (nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo() {
        console.log(`Hello my name is ${this.nombre} and have ${this.edad} old year`)
    }

    obtenNombre(){
        return this.#nombre // Funcion getter nos permite acceder de forma controlada a algun atributo permitido
    }

    #obtenEdad(){
        return this.#edad
    }

    getEdad(){
        return this.#edad
    }

    setEdad(nueva_edad){
        this.#edad = nueva_edad
    }
    
}

const persona = new Persona("Jona", 33)
persona.saludo()
// console.log(persona.obtenNombre())

const edad = persona.getEdad()
console.log(edad)

const nombre = persona.obtenNombre()
console.log(nombre)

// Setter metodo que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// quiero cambiar la edad de la persona

persona.setEdad(24)
console.log(persona.getEdad())