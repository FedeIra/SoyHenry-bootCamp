/* alert("llegue soy el alert."); */

/*!SELECTORES:
Nos permiten seleccionar elementos dentro del document (DOM html), seleccionarlos e interactuar con ellos, luego devolviendo el elemento modificado*/

/* Se puede seleccionar por class, id y tag */

function cambiarTexto(txt) {
  let titulo = document.querySelectorAll("hi");
  console.log("soy el tag", titulo);
  titulo.innerHTML = txt || "pepe";
}

setTimeout(() => {
  cambiarTexto("un texto de ejemplo");
}, 4);

function cambiarTexto(txt) {
  let titulo =
    document.querySelector(
      ".veintinueve"
    ); /* Acá accedemos seleccionando la calse */
  console.log("soy el tag", titulo);
  titulo.innerHTML = txt || "pepe";
}

document.body.addEventListener("click", function () {
  console.log("1");
}); /* Acá le aplico el event listener a todo el body*/

/* Acá aplico event listener a los botones */
var boton = document.querySelector("button");

var contador = 1;

boton.addEventListener("click", function (evento) {
  console.log("click");
  /* console.log(evento); */
  // document CRUD: significa que voy a poder crear, leer, actualizar y borrar
  let nuevoElemento =
    document.createElement("li"); /* Con esto creamos un elemento de la lista */
  console.log(nuevoElemento);
  nuevoElemento.innerText = "oveja num " + ++contador;
  var lista = document.querySelector("ul");
  lista.appendChild(nuevoElemento); /* Para agregar un elemento, no crearlo */
}); /* A partir del documento podemos seleccioanr cosas, cambiar texto */
