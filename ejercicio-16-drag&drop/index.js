const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const seccionimg = document.querySelectorAll(".seccion-img")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        // console.log("Inicio de arrastre")
        // console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        // const elemento_fantasma = document.querySelector(".seccion-img")
        // event.dataTransfer.setDragImage(elemento_fantasma,0,0)

    })
    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
        // console.log("Drag over")
    })
    seccion.addEventListener("drop", event => {
        // console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("parrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})
seccionimg.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        // event.dataTransfer.dropEffect = "copy"
        // console.log("Drag over")
    })
    seccion.addEventListener("drop", event => {
        // console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("parrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo).remove()
        // seccion.appendChild(parrafo)
    })
})
