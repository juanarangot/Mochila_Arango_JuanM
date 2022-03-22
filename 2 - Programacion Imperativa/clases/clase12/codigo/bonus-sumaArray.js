// Funcion que suma el contenido de un array y lo retorna
function sumaArray(matriz) {
    var suma = 0;
    typeof matriz[0] === 'number' ? suma = 0 : suma = '';

    // for (var i = 0; i < matriz.length; i++) {
    //     suma += matriz[i];
    // }
    // Uso de for-of
    for (let value of matriz) {
        suma += value;
    }
    return suma;
}


// Definicion de los arrays
var array = [1, 2, 3, 4, 5];
// array = [1.63, 2.12, 3.3, 4, 5.52];
// array = ['j', 'u', 'a', 'n'];


// Llamado de la funcion
console.log(sumaArray(array));
