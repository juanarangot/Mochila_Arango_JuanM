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

// A Creacion del objeto literal
let mesaDeAyuda = {

// B Propiedad tickets que almacena los datos obtenidos del 'json'
    tickets : jsonHelper.leerJson('tickets'),


// C Metodo que permite listar los tickets desde un array
    listarTickets : function(){
        this.tickets.forEach(function(ticket){
            console.log(`Id: ${ticket.id}, de ${ticket.usuario}, ${ticket.estaResuelto ? "esta resuelto" : "no esta resuelto"}, espera de ${ticket.minutosDeEspera} minutos`);
        });
    },

// D Metodo que permite buscar un ticket por su ID
    buscarPorId : function(id) {
        // Variable auxiliar que almacena el resultado de busqueda
        let resultado = undefined;
        // Uso del bucle forEach para recorrer el array de tickets y analizar las coincidencias
        this.tickets.forEach(function(ticket){
            if (ticket.id == id) {
                resultado = ticket;
            }
        });
        return resultado;
    },


// E Metodo que permite devolver todos los tickets resueltos
    ticketsResueltos : function () {
        let resultado = [];
        resultado = this.tickets.filter(function(ticket){
            // Evalua el estado del ticket para su devolucion
            if (ticket.estaResuelto) {
                return ticket;
            }
        });
        // Se retorna la lista con los valores filtrados
        return resultado;
    },

// F Metodo que permite filtrar los tickets con un tiempo de espera determinado
    filtrarPorEspera : function(dMin, dMax) {
        let resultado = [];

        resultado = this.tickets.filter(function(ticket){
            // Evalua el estado del ticket para su devolucion
            if (ticket.minutosDeEspera >= dMin && ticket.minutosDeEspera <= dMax) {
                return ticket;
            }
        });
        // Se retorna la lista con los valores filtrados
        return resultado;
    },

// G Metodo que permite ordenar los tickets en funcion de su tiempo de espera
    ordenarPorEspera : function() {
        // let resultado = this.tickets;

        // for (let i = 0; i < resultado.length; i++) {
        //     for (let j = 0; j < resultado.length; j++) {
        //         if (resultado[i].minutosDeEspera > resultado[j].minutosDeEspera) {
        //             let aux = resultado[i];
        //             resultado[i] = resultado[j];
        //             resultado[j] = aux;
        //         }
        //     }
        // }

        // Se ordenan los tickets de mayor a menor tiempo de espera
        let resultado = this.tickets.sort(function(a, b){
            return b.minutosDeEspera - a.minutosDeEspera;
        });

        // Se retorna la lista con los valores ordenados
        return resultado;
    },

// H Metodo que permite conocer la duracion total de espera de los tickets
    duracionTotalEspera : function() {
        // Se itera sobre los valores del array de tickets y se obtiene un valor acumulado
        let resultado = this.tickets.reduce(function(total, ticket){
            // Se suma y se acumula el tiempo de cada ticket
            return total + ticket.minutosDeEspera;
        }, 0);

        return `La duracion de todos los tickets sumados es de ${resultado} minutos`;
    },

// I Metodo que permite cambiar la prioridad de un ticket y modifica el archivo
    cambiarPrioridad : function (id, prioridad) {
        let ticket = this.buscarPorId(id);

        if (ticket != undefined) {
            // Se realiza el cambio respectivo en la propiedad del ticket
            ticket.prioridad = prioridad;
            // Se escribe el archivo con los cambios
            jsonHelper.escribirJson('tickets', this.tickets);

            return ticket;
        }
        // Se retorna 'undefined' al no encontrar el ticket
        else {
            return ticket;
        }
    },

}

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
// Ejecución aquí
mesaDeAyuda.listarTickets();
console.log(o);

console.log(v, oo + " .D. Buscar");
// Ejecución aquí
console.log(mesaDeAyuda.buscarPorId(10));
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
// Ejecución aquí
console.log(mesaDeAyuda.ticketsResueltos());
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
// Ejecución aquí
console.log(mesaDeAyuda.filtrarPorEspera(100, 200));
console.log(o);

console.log(v, oo + " .G. Ordenar");
// Ejecución aquí
console.log(mesaDeAyuda.ordenarPorEspera());
console.log(o);

console.log(v, oo + " .H. Duracion");
// Ejecución aquí
console.log(mesaDeAyuda.duracionTotalEspera());
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
// Ejecución aquí
console.log(mesaDeAyuda.cambiarPrioridad(10, 'Baja'));
console.log(o);
