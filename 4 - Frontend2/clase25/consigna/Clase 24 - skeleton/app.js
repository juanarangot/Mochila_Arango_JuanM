console.log("hello");

const apiBaseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const pokemon = 'pikachu'

setTimeout(function() {
    fetch(`${apiBaseUrl}${pokemon}`)
    .then( respuesta => respuesta.json())
    .then( data => {
        console.log(data);
        renderizar(data.name,data.sprites.front_default);
    })
    
},3000)

function renderizar(nombre, imagen) {
    const nodoNombre = document.querySelector('.card h3');
    const nodoImagen = document.querySelector('.card img');

    document.querySelector('.card').classList.remove('skeleton')

    nodoNombre.innerText= nombre;
    nodoImagen.setAttribute('src', imagen);
}