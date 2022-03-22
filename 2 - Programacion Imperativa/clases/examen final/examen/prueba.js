let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    sumar: function(a, b) {
        return a + b;
    }
}

persona["restar"] = function(a, b) {
    return a - b;
}

console.log(persona.restar(3, 3));