function devolverTrue(){
    if (true) {
        return devolverTrue()
    }
}
console.log(devolverTrue)

const miPromesa = new Promise((resolve,reject) => {
    if (true){
        setTimeout(5000)
        resolve();
    } else {
        reject()
    }
})
