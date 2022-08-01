function cambiarTexto(txt) {
  let titulo = document.querySelectorAll(".veintinueve");
  console.log("soy el tag", titulo);
  // modificaciones
  titulo.innerHTML = txt || "pepe";
}

var boton = document.querySelector("button");
var contador = 1;

boton.addEventListener("click", function (evento) {
  console.log("click");
  // document CRUD del dom --> Create Read Update Delete
  var nuevoElemento = document.createElement("li");
  nuevoElemento.innerText = "Oveja num" + ++contador;
  // <li> Oveja num 2 </li>
  var lista = document.querySelector("ul")
  lista.appendChild(nuevoElemento)
});
