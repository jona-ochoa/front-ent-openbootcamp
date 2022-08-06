const miFunction = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    // return false
    throw new Error("El valor debe ser de tipo numero")
}
// console.log(miFunction("5"))
const numero = 6;
try {
    // Código que puede fallar
    console.log("Ejecucion correcta")
    const doble = miFunction(numeros)
    console.log(doble)
} catch (e) {
    // Quiero que ejecutes esto
    console.log("Error!") 
    console.log(e)
} finally {
    console.log("Esto se ejecuta siempre")
}