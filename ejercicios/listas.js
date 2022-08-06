const compraDeLista = ["Azucar", "Pan", "Manteca", "Queso", "Gaseosa"];
console.log(compraDeLista);

compraDeLista.push("Aceite de Girasol");
console.log(compraDeLista);
compraDeLista.pop();
console.log(compraDeLista);

const peliculas = [
  {
    titulo: "Avengers: Infinity War",
    director: "Anthony Ruso",
    fecha: new Date(2019, 4, 26),
  },
  {
    titulo: "Harry Potter y las reliquias de la muerte 2",
    director: "David Yates",
    fecha: new Date(2011, 06, 14),
  },
  {
    titulo: "Avatar",
    director: "James Cameron",
    fecha: new Date(1997, 11, 11),
  },
];

const peliculasNuevas = peliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);
console.log(peliculasNuevas);

const directores = peliculas.map((pelicula) => {
  return pelicula.director;
});
console.log(directores);

const titulos = peliculas.map((pelicula) => {
  return pelicula.titulo;
});

const directoresTitulos = directores.concat(titulos);
console.log(directoresTitulos);

const directoresTitulosProp = [...directores, ...titulos];
console.log(directoresTitulosProp);
