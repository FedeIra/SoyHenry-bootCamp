import React, { Component } from "react";
import { increment, decrement, reset, fetchPosts } from "../actions";
import store from "../store.js";
import * as actionsCreators from "../actions"; /* Acá importé todas las acciones generadas: increment, decrement, reset, fetchPosts, etc.*/
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPost } from "../actions/index.js";
import axios from "axios";

const Counter = ({ counter, increment, decrement, reset, fetchPost }) => (
  <p>
    {/* la propiedad counter viene de: const mapStateToProps = (state) => ({
  counter: state.count,
}); En definitiva, es equivalente a store.getState().count */}
    Clicked: {counter} times <button onClick={increment}>+</button>{" "}
    {/* le paso la definición de la función. NO ES LA INVOCACIÓN. Si le quiero pasar un parámetro tengo que hacer una función flecha
    PASOS QUE HACE:
    1) onClick = {store.dispatch(increment())}
    2) onClick = {store.dispatch({type: "INCREMENT"}) Esto va al reducer
    3) counter: state.count => 1*/}
    <button onClick={decrement}>-</button>{" "}
    <button onClick={reset}>Reset</button>
    {/* reset = () => store.dispatch(reset({type: "RESET"}))
    Llega al reducer con el valor reset, modifica el estado y pone el count en 0. */}
    <button onClick={() => fetchPost(counter)}>Fetch</button>
  </p>
);

const mapStateToProps = (state) => ({
  counter: state.count,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
} /* toma todas las acciones y le pasa el dispatch. Genera lo que está abajo, pero para todos los action creators: increment, decrement, reset, fetchPosts, etc.  */

// OTRA FORMA PARA EL MAPDISPATCHTOPROPS:
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ increment, decrement }, dispatch);
// }

//OTRA FORMA PARA EL MAPDISPATCHTOPROPS:
// function mapDispatchToProps(dispatch) {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//     reset: () => dispatch(reset()),
//     fetchPost: (id) => dispatch(fetchPost(id)),
//     getPost: () => dispatch(getPost()),
//     receivePost: () => dispatch(receivePost(post)),
//   };
// }

//OTRA FORMA PARA EL MAPDISPATCHTOPROPS:

// function mapDispatchToProps(dispatch) {
//   return {
//     increment: function () {
//       dispatch(increment());
//     },
//     decrement: function () {
//       dispatch(decrement());
//     },
//   };
// }
/* Esto te sirve si lo importaste así:
 import { increment, decrement, reset, fetchPosts } from "../actions"; */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter); /* Aca le pasas el componente que es Counter. Esto se importa. */
