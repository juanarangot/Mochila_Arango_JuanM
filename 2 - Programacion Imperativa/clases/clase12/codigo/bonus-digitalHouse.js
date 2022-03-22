// Funcion que imprime un mensaje si alguno de los numero es multiplo de los que se imprimen
function digitalHouse(n1, n2) {
    for (let i = 0; i < 100; i++) {
        // Evalula la multiplicidad de los valores pasados con el numero actual
        if (i % n1 == 0) {
            console.log("Digital");
        }
        else if (i % n2 == 0) {
            console.log("House");
        }
        else {
            // Si no es multiplo de ninguno, imprime el numero actual
            console.log(i);
        }
    }
}

// Llamado de la funcion
digitalHouse(2, 3);
