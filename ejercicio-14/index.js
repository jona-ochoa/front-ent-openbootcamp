boton.addEventListener("click", evento => {
    console.log(evento)
    alert('click en el botón')
})

$(() => {
    $("#boton").click(() => {
        console.log('Hola, estoy utilizando jQuery')
    })
    
})