const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tres partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Juan Manuel Arango";
const tema = "TEMA 4";

const arrayProfesionales = [
  {
    id: 0,
    estaHabilitado: false,
    nombre: "Huber Wilkins",
    email: "huberwilkins#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 3,
  },
  {
    id: 1,
    estaHabilitado: true,
    nombre: "Goldie Haley",
    email: "goldiehaley#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 3,
  },
  {
    id: 2,
    estaHabilitado: false,
    nombre: "Pena Landry",
    email: "penalandry@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 9,
  },
  {
    id: 3,
    estaHabilitado: false,
    nombre: "Leanne Burch",
    email: "leanneburch#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 13,
  },
  {
    id: 4,
    estaHabilitado: false,
    nombre: "Haynes Fuentes",
    email: "haynesfuentes@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 75,
  },
  {
    id: 5,
    estaHabilitado: true,
    nombre: "Tamika Fuentes",
    email: "tamikanewman@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 32,
  },
  {
    id: 6,
    estaHabilitado: true,
    nombre: "Russo Baldwin",
    email: "russobaldwin@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 67,
  },
  {
    id: 7,
    estaHabilitado: true,
    nombre: "Dodson Shaffer",
    email: "dodsonshaffer#speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 2,
  },
  {
    id: 8,
    estaHabilitado: true,
    nombre: "Guerra Bright",
    email: "guerrabright#speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 9,
    estaHabilitado: true,
    nombre: "Dina Navarro",
    email: "dinanavarro@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 8,
  },
  {
    id: 10,
    estaHabilitado: false,
    nombre: "Stafford Watts",
    email: "staffordwatts@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 0,
  },
  {
    id: 11,
    estaHabilitado: false,
    nombre: "Joni Avery",
    email: "joniavery@speedbolt.com",
    especialidad: "Neumonologia",
    cantidadConsultas: 6,
  },
  {
    id: 12,
    estaHabilitado: true,
    nombre: "Mayra Tran",
    email: "mayratran@speedbolt.com",
    especialidad: "Oftamologia",
    cantidadConsultas: 2,
  },
  {
    id: 13,
    estaHabilitado: false,
    nombre: "Ward Dale",
    email: "warddale@speedbolt.com",
    especialidad: "Cardiologia",
    cantidadConsultas: 23,
  },
];

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

let appProfesionales = {
// A. Objeto literal
  profesionales : arrayProfesionales,

  // Metodo interno que permite saber si el profesional esta activo o no
  isActive: function(id) {
    let active =  this.profesionales.find(profesional => profesional.id === id).estaHabilitado;
    return active ? "ok" : "inactivo";
  },

// B Metodo de listar todos los profesionales
  listarProfesionales : function() {
    for (let person of this.profesionales) {
      console.log(`id ${person.id} ${this.isActive(person.id)}, ${person.especialidad}, ${person.nombre}, consultas: ${person.cantidadConsultas}, email: ${person.email}`);
    }
  },

// C. Metodo que permite filtrar los profesionales activos por especialidad
  filtrarHabilitadosPorEspecialidad : function(especialidad) {
    let habilitados = this.profesionales.filter(profesional => profesional.estaHabilitado && profesional.especialidad === especialidad);

    return habilitados;
  },

// D Metodo que permite buscar y devolver un profesional por su id
  buscarPorID : function(id) {
    return this.profesionales.find(profesional => profesional.id === id);
  },

// E Metodo que permite aumentar en 1 la cantidad de consultas de un profesional y retorna el profesional modificado
  realizarConsulta : function(id) {
    let profesional = this.buscarPorID(id);
    profesional.cantidadConsultas++;
    return profesional;
  },

// F Metodo que permite corregir el email de los profesionales que lo tengan incorrecto
  corregirEmails : function() {
    for (let profesional of this.profesionales) {
      profesional.email = profesional.email.replace("#", "@");
    }
  },
};



/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

console.log(v, "\n" + oo + "   B. listarProfesional");
// Ejecución aquí
appProfesionales.listarProfesionales();
console.log(o);

console.log(v, oo + "   C. filtrarHabilitadosPorEspecialidad('Cardiologia')");
// Ejecución aquí
console.log(appProfesionales.filtrarHabilitadosPorEspecialidad("Cardiologia"));
console.log(o);

console.log(v, oo + " D. buscarPorId(1)");
// Ejecución aquí
console.log(appProfesionales.buscarPorID(1));
console.log(o);

console.log(v, oo + "  E. realizarConsulta()");
// Ejecución aquí
console.log(appProfesionales.realizarConsulta(1));
console.log(o);

console.log(v, oo + " F. corregirEmails");
// Ejecución aquí
appProfesionales.corregirEmails();
// console.log(appProfesionales.listarProfesionales());
console.log(o);
