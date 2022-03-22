let alicia = [23, 69, 32]
let bob = [12, 67, 43]

// Funcion para encontrar el ganador
function encontrarGanador(a, b) {
    // Variable de matriz para almacenar los resultados de puntos
    let ganador = [[a, 0], [b, 0]]

    // Ciclo for para recorrer los votos de cada participante
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            ganador[0][1]++
        } else if (a[i] < b[i]) {
            ganador[1][1]++
        }
    }
    // Retorna el ganador basado en una evaluacion de puntos en la mattiz 'ganador'
    // return ganador[0][1] > ganador[1][1] ? "alicia" : "bob";
    if (ganador[0][1] > ganador[1][1]) {
        return "alicia";
    }
    else if (ganador[0][1] < ganador[1][1]) {
        return "bob";
    }
    else {
        return "empate";
    }
}