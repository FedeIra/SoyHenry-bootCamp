export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá.
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const increment = (valor) => {
  return {
    type: INCREMENT,
    payload: valor,
  };
};

// OTRA FORMA:
/* export const increment = () => {
  return {
    type: INCREMENT,
    payload: 1,
  };
}; */

export const decrement = () => {
  return {
    type: DECREMENT,
    payload: 1,
  };
};
