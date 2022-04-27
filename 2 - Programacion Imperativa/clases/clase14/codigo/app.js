const funcs = require("./archivo");

const profesionales = [
  {
    id: 0,
    estaHabilitado: false,
    honorarioConsulta: 2007.68,
    edad: 29,
    nombre: "huber Wilkins",
    telefono: "+1 (926) 409-3726",
    direccion: "197 stuart street",
    especialidad: "Neumonologia",
    cantidadConsultas: 0,
    puntaje: 8,
  },
  {
    id: 6,
    estaHabilitado: true,
    honorarioConsulta: 2568.94,
    edad: 34,
    nombre: "russo Baldwin",
    email: "russobaldwin@speedbolt.com",
    especialidad: "Dermatologia",
    cantidadConsultas: 4,
    puntaje: 10,
  },
];

console.log(funcs.appProfesionales.listarProfesionales(profesionales));
