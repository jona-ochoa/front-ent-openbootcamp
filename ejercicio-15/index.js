var nombre= "Jonatan"
var apellido = "Ochoa"

const persona = {
    nombre,
    apellido
}
// sessionStorage.setItem("persona", JSON.stringify(persona))
// localStorage.setItem("persona", JSON.stringify(persona))

const time = new Date()
// document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(time.getTime() + 2 * 60000)}`
// console.log(time)