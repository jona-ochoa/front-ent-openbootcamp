const hoy = new Date();
const nacimiento = new Date(1988,10,11,3,35)
console.log(nacimiento)
const compararFechas = hoy.getTime() > nacimiento.getTime()

const diaNacimiento = nacimiento.getDate()

const mesNacimiento = nacimiento.getMonth()

const anyoNacimiento = nacimiento.getFullYear()