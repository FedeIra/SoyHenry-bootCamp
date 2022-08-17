//!ACTIONS

const { INCREMENTO, DECREMENTO } = require("../action-types");

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá.
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = () => {
  return {
    type: INCREMENTO,
    payload: 1,
  };
};

const decremento = () => {
  return {
    type: DECREMENTO,
    payload: 1 /* Es la acción que cambia al estado. son datos para la modificación del estado */,
  };
};

/* OTRA FORMA YA QUE NO RECIBE PROPIEDADES (en lugar de funciones declarar los objetos. Si reciben propiedades si o si como funciones):

const incremento =  {
  return { type: INCREMENTO };
};

const decremento = {
  return { type: DECREMENTO };
};

 */

module.exports = {
  incremento,
  decremento,
};
