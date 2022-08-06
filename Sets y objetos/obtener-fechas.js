// Trabajando con Fechas
const fecha = new Date()
console.log(fecha)

const fecha2 = new Date(1987, 10,11,3,35)
console.log(fecha2)

const compararFechas = fecha > fecha2
console.log(compararFechas)

const fecha5 = new Date(1987, 10,11,3,35)
console.log(fecha2 === fecha5) //ERROR - no se pueden comparar de esta manera
console.log(fecha2.getTime() === fecha5.getTime())


// Como obtener el mes el dia y el año de tu fecha
// Obtener eñ dia getDate()
console.log(fecha2.getDate())

// Obtener el mes
console.log(fecha2.getMonth())

// Obtener el Año
console.log(fecha2.getFullYear())