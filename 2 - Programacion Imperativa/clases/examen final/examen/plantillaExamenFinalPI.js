// Importacion del modulo para manipular archivos '.json'
const jsonHelper = require('./jsonhelper')

const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Juan Manuel Arango";
const tema = "TEMA 2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// A Creacion del objeto lireral
let gestionDePeliculas = {
// B Propiedad peliculas que almacena los datos obtenidos del modulo
    peliculas: jsonHelper.leerJson("peliculas"),

// C metodo que permita listar las peliculas
    listarPelículas: function (peliculas) {
        for (let pelicula of peliculas) {
            console.log(`${pelicula.titulo}, de ${pelicula.director}. Duracion: ${pelicula.duracion} minutos, ${pelicula.genero}, (${pelicula.calificacionIMDB} / 10 en IMDB) `);
        }
    },

// D Metodo que permite buscar una pelicula por su ID
    buscarPorId : function (id) {
        // Variable auxiliar que almacena el resultado de busqueda
        let resultado = undefined;
        for (let pelicula of this.peliculas) {
            if (pelicula.id == id) {
                resultado = pelicula;
            }
        }
        return resultado;
    },

// E Metodo que permite retronar las peliculas de un genero determinado
    peliculasPorGenero: function (genero) {
        let resultado = [];
        for (let pelicula of this.peliculas) {
            if (pelicula.genero === genero) {
                resultado.push(pelicula);
            }
        }
        return resultado;
    },

// F Metodo que permite filtrar las peliculas por un rango de calificacion determinada
    filtrarPorCalificacion : function (cMin, cMax) {
        let resultado = [];
        for (let pelicula of this.peliculas) {
            if (pelicula.calificacionIMDB >= cMin && pelicula.calificacionIMDB <= cMax) {
                resultado.push(pelicula);
            }
        }
        return resultado;
    },

// G Metodo que permite ordenar las peliculas segun su duracion
    ordenarPorDuracion : function () {
        // Se crea una nueva llamada al json
        let peliculas = jsonHelper.leerJson("peliculas");
        let ordenadas = peliculas.sort(function (a, b) {
            return a.duracion - b.duracion;
        });

        return ordenadas;
    },

// H Metodo que permite calcular el tiempo de duracion promedio de las peliculas
    duracionPromedio : function () {
        let promedio = 0;
        for (let pelicula of this.peliculas) {
            promedio += pelicula.duracion;
        }

        promedio = promedio / this.peliculas.length;
        return `El promedio de duración de las películas es de: ${promedio} minutos`;
    },

// I
    modificarGeneroPorId: function (id, genero ) {
        // Variable auxiliar que almacena el resultado de busqueda usando un metodo propio
        let pelicula = this.buscarPorId(id);

        if (pelicula !== undefined) {
            // Realizando el cambio respectivo en el objeto
            pelicula.genero = genero;
            // this.peliculas[id-1] = pelicula;
            jsonHelper.escribirJson("peliculas", this.peliculas);

            return pelicula;
        }
        else {
            return pelicula;
        }
    }
}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
// Ejecución aquí
gestionDePeliculas.listarPelículas(gestionDePeliculas.peliculas);
console.log(o);

console.log(v, oo + " .D. Buscar");
// Ejecución aquí
console.log(gestionDePeliculas.buscarPorId(5));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
// Ejecución aquí
console.log(gestionDePeliculas.peliculasPorGenero("Drama"));
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
// Ejecución aquí
console.log(gestionDePeliculas.filtrarPorCalificacion(7, 9));
console.log(o);

console.log(v, oo + " .G. Ordenar");
// Ejecución aquí
console.log(gestionDePeliculas.ordenarPorDuracion());
console.log(o);

console.log(v, oo + " .H. Duracion");
// Ejecución aquí
console.log(gestionDePeliculas.duracionPromedio());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
// Ejecución aquí
console.log(gestionDePeliculas.modificarGeneroPorId(3, "sfad"));
console.log(o);

