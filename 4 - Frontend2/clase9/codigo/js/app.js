//cronometro
//evento que se dispara cuando se carga la web
window.addEventListener('load',()=>{console.log('hola window')})
//variables
let contador = 0
let cronometro
let tiempo = 1000
let valor = document.querySelector('#valor')
let btnIniciar = document.querySelector('#iniciar')
let btnPausar = document.querySelector('#pausa')
let btnStop = document.querySelector('#stop')
let btnAcelerar = document.querySelector('#acelerar')
let times = document.querySelector('#times')

//Escuchadores de eventos (event listeners)
btnIniciar.addEventListener('click', iniciar)
btnPausar.addEventListener('click', pausar)


//funciones
function iniciar(){
    cronometro = setInterval(function(){
        contador++
        console.log(contador)
        renderizar()
    },tiempo)
}

function renderizar(){
    valor.innerHTML = contador
}

function pausar(){
    clearInterval(cronometro)
}

function stop(){}

function acelerar(){}