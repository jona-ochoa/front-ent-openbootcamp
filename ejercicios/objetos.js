const obj = {
  nombre: "Jonatan",
  apellido: "Ochoa",
  edad: 33,
  altura: "1.69",
  eresDesarrollador: true,
};
const obtenerEdad = obj.edad;
console.log(obtenerEdad);

const obj2 = [
  { ...obj },
  {
    nombre: "Tobias",
    apellido: "Saravia",
    edad: 23,
    altura: "1.76",
    eresDesarrollador: true,
  },
  {
    nombre: "Franco",
    apellido: "Charriol",
    edad: 34,
    altura: "1.74",
    eresDesarrollador: true,
  },
];
console.log(obj2);
const listaOrdenada = obj2.sort((a,b) => a.edad - b.edad)
console.log(listaOrdenada)
