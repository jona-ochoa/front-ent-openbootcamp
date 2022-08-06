function devolverTrue(){
        return true
}

async function miPromesa() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Hola soy una promesa');
      }, 2000);
    });
  }


function* generarIndices() {
    let id = 0;
    while(true) {
        id = id + 2;
        yield id;
    }
}
const gen = generarIndices();


