const appProfesionales = {
    listarProfesionales : function(listado){
        // for (let i = 0; i < listado.length; i++) {
        for (let persona of listado) {

            let disponible = persona.estaHabilitado ? "ok" : "inactivo";

            console.log(`id: ${persona.id} ${disponible}, ${persona.especialidad}, ${persona.nombre} , valor consulta ${persona.honorarioConsulta } puntaje ${persona.puntaje}`);
        }
    },
};


module.exports = {
    appProfesionales
};
