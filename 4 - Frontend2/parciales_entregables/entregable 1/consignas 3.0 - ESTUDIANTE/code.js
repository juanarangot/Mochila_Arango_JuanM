/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */


/* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
function obtenerDatosDelUsuario() {
  datosPersona.nombre = prompt("Ingrese nombre:")
  datosPersona.edad = 2022 - prompt("Ingrese año de nacimiento:");
  datosPersona.ciudad = prompt("Ingrese ciudad:");
  let interes = confirm("Presenta interes en JavaScript?")
  datosPersona.interesPorJs = interes ? "Si" : "No";

  console.log(datosPersona);
}


/* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
function renderizarDatosUsuario() {

  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  obtenerDatosDelUsuario();
  {
    document.querySelector("#nombre").innerHTML = datosPersona.nombre;
    document.querySelector("#edad").innerHTML = datosPersona.edad;
    document.querySelector("#ciudad").innerHTML = datosPersona.ciudad;
    document.querySelector("#javascript").innerHTML = datosPersona.interesPorJs;
  }
}


/* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
function recorrerListadoYRenderizarTarjetas() {
  let containerCard = document.getElementById("fila");

  for (let materia of listado) {
    let container = document.createElement("div");
    let image = document.createElement("img");
    let lenguaje = document.createElement("p");
    let bimestre = document.createElement("p");

    let node1 = document.createTextNode(materia.lenguajes);
    let node2 = document.createTextNode(materia.bimestre);

    container.setAttribute("class", "caja");
    image.setAttribute("src", materia.imgUrl);
    image.setAttribute("alt", materia.lenguajes);
    lenguaje.setAttribute("class", "lenguajes");
    bimestre.setAttribute("class", "bimestre");

    lenguaje.appendChild(node1);
    bimestre.appendChild(node2);
    container.appendChild(image);
    container.appendChild(lenguaje);
    container.appendChild(bimestre);
    containerCard.appendChild(container);
  }

  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}


/* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
function alternarColorTema() {
  let tema = document.getElementById("cambiar-tema");
  let site = document.getElementById("sitio");

  tema.addEventListener("click", () => {
    site.classList.toggle("dark");
  })
}


/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
function showText() {
  let text = document.getElementById("sobre-mi");

  document.addEventListener("keypress", (event) => {
    if (event.key.toUpperCase() == "F") {
      text.classList.remove("oculto");
    }
  });
}

document.addEventListener("DOMContentLoaded", showText, false);
