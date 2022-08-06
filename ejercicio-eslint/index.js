const nombre = "Jonatan"
const apellido = "Ochoa"

const estudiante = nombre.concat(" ").concat(apellido)

const estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)
const estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

const estudianteLength = estudiante.length
console.log(estudianteLength)

const primerletra = nombre.substring(0, 1)
console.log(primerletra)

const ultimaletra = apellido.substring(apellido.length - 1, apellido.length)
console .log(ultimaletra)



const estudianteSinEspacios = estudiante.replace(/ /g, "")
console.log(estudianteSinEspacios)


const nombreEnEstudiante = estudiante.includes(nombre)
console.log(nombreEnEstudiante)