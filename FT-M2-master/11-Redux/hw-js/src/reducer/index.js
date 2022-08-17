//!REDUCER

const { INCREMENTO, DECREMENTO } = require("../action-types");

const initialState = {
  contador: 0,
  otroEstado: false,
  otroEstadoMas: 2 /* pueden teenr muchos estados */,
  otroObjeto: {
    otraPropiedad: 3,
    otraPropiedadMas: true,
  },
};

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator.
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) {
  switch (action.type) {
    case INCREMENTO:
      return {
        ...state,
        contador: state.contador + action.payload,
        /* otroEstado: true,
        otroEstadoMas: state.otroEstadoMas + action.payload, */
        // Podes pisar todas las propiedades que quieras
      };
    case DECREMENTO:
      return { ...state, contador: state.contador - action.payload };
    default:
      return { ...state };
  }
}

//! OTRA FORMA CON DESTRUCTURACION

/* function contador (state=initialState, {type, payload}) {
  switch (action.type) {
    case INCREMENTO:
      return { ...state, contador: state.contador + action.payload };
    case DECREMENTO:
      return { ...state, contador: state.contador - action.payload };
    default:
      return { ...state };
  }
} */

module.exports = contador;
