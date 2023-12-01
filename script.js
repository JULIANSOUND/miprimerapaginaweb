//alert("Hola este es mi Javascript");

//let nombre1 = "Santa_Marta";

//const nombre2 = "Santa_Marta";

//var nombre3 = "Santa_Marta";

//console.log(nombre1);

//console.log(nombre2);

//console.log(nombre3);

//SELECCIONAR ELEMENTOS

let contenidoTitulo = "Experiencia Paradise";

let titulo = document.querySelector(".acerca-de")
titulo.innerHTML = contenidoTitulo

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo)

if (textoTitulo == "Nombre") {
    titulo.innerHTML = "otro"
}
else{
    console.log("no se cumple")
}

//FUNCIONES

let nombre = "Bienvenidas";
let ciudad = "Medellin";
let parque = "Salamanca";

let parrafo = document.querySelector(".acerca-de");

function cambiarTexto(nombre, ciudad, parque){
    let contenido = ` ${nombre}, para conocer actividades de naturaleza mágicas para vivir en los rededores del Parque ${parque}, en ${ciudad}, Colombia.`;

return contenido;

}

parrafo.innerText = cambiarTexto(nombre, ciudad, parque);
