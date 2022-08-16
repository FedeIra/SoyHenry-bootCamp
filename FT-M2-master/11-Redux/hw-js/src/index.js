const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
const store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
const valor = document.getElementById("valor");

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  let contador = store.getState().contador;
  valor.innerText = contador;
  // Obtenemos la propiedad 'contador' de nuestro store:
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
}

// Ejecutamos la funcion 'renderContador':
renderContador();
// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador);

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
document.getElementById("incremento").addEventListener("click", () => {
  store.dispatch({
    type: "INCREMENTO",
  });
});
document.getElementById("decremento").addEventListener("click", () => {
  store.dispatch({
    type: "DECREMENTO",
  });
});

document.getElementById("incrementoImpar").addEventListener("click", () => {
  if (store.getState().contador % 2 !== 0) {
    store.dispatch({
      type: "INCREMENTO",
    });
  }
});

document.getElementById("incrementoAsync").addEventListener("click", () => {
  setTimeout(function () {
    store.dispatch({
      type: "INCREMENTO",
    });
  }, 1000);
});
