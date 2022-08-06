let nombre = 'Jonatan';
let apellido = 'Ochoa';
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);
let estudianteMayus = (estudiante.toUpperCase());
let estudianteMinus = (estudiante.toLowerCase());
console.log(estudianteMayus);
console.log(estudianteMinus);
let str = (estudiante.length);
console.log(str)
let primeraLetra = nombre.slice(0, 1);
console.log(primeraLetra);
let ultimaLetra = apellido.slice(4, 5);
console.log(ultimaLetra);
let eliminarEspacio = estudiante.trim().length;
console.log(eliminarEspacio);
let booleanNombre = estudiante.includes(nombre)
console.log(booleanNombre)