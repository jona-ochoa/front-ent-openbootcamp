function suma(a, b) {
    return a + b;
}

function multiplica(a , b) {
    return a * b;
}

function eleva(a, b) {
    return a ** b 
}

function factorial(a) {
    // Funcion factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial
}

// const fact = factorial(5)
// console.log(fact)

// const sum = suma(15, 90)
// console.log(sum)

module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}