// TRABAJAMOS CON OBJETOS
const obj = {
  id: 4,
  nombre: "Jonatan",
  apellido: "Ochoa",
  isDeveloper: true,
  libros_favoritos: ["El método", "El codigo de la manifestación"],
  "4-juegos": [1, 2, 3, 4],
};
console.log(obj["4-juegos"][2]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Julian";
console.log(obj2.nombre);
console.log(obj.nombre);

let val1 = 4;
let val2 = val1;
console.log(val2);
val2 = 6;
console.log(val1);
console.log(val2);

// Asignar el mismo valor en direccion en memoria a dos variables diferentes
//////// Se solucionan muchos problemas sabiendo lo siguiente ---->
const obj3 = { ...obj };
console.log(obj3.nombre)

obj.nombre = "Gorka"

console.log(obj2.nombre)
console.log(obj3.nombre)

/////////
// Como ordenar lista de objetos en funcion de una propiedad
