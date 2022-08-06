class Estudiante {
  constructor(nombre, asignaturas) {
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }

  nombre = "Jonatan";
  asignaturas = ["javascript", "HTML", "CSS"];
  obtenDatos() {
    return this.nombre, this.asignaturas
  }
}

const nuevo_estudiante = new Estudiante("Ochoa", "React, angular, Vue");
console.log(nuevo_estudiante);
nuevo_estudiante.obtenDatos()
