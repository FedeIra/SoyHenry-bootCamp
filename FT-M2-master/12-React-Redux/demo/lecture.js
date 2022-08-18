/*
!REDUX CON REACT
Que el componente reciba por propiedades los valores del estado que se van renderizando a medida que las propiedades sufran cambios.

Hay que tratar de dividir los componentes smart de los dumb:
*/
/*
!Smart: (ej cards en el homework o app)
1) saben cómo funcionan las cosas
2) encargados de obtener info. y contienen los pequños elementos,
3) sin estilos,
4) provee datos
5) invoca las acciones  */

/*
!Dumb: (ej: card en el homework)
1) cómo  se ven las cosas
2) trabaja con sus props,
3) Generalmente no tienen estado propio (algunos sí) */

/*
!Containers (los smarts)
Separarlos te da ventajas. Separa los problemas de la l{ogica de lo presentacional.
Obtenemos componentes reutilizables.
Localizamos la complejidad en un solo doc.

Los presentacionales (dumb) no saben de redux, lee sus propiedades de props, invoca callbacks de sus props. Los containers (smart) se trata de cómo funcionan las cosas, saben de redux, suscribe a los estados de Redux y envían acciones a redux.*/

/*
!CONEXIÓN REACT-REDUX (desde el contenedor o componente smart):
*/
import { bindActionCreators } from "redux";
import { connect } from "react-redux"; /* esto conecta React y Redux */
import * as actionsCreators from "../actions";

import Main from "./Main.js";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  }; /* devuelve un OBJETO */
} /* recibe el estado de la aplicación y lo mapea a props de react.  Nombre de la función por convención. Recibe el valor del estado global. Pero como no queres TODA la info. pasas la info. por propiedades de los valores que hay en el estado que necesites. Si se actualiza cualquiera de estas dos propiedades se renderiza de vuelta.*/

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
} /* recibe el método dispatch y retorna callbacks props que vamos a poder pasar a los componentes presentacionales. Nombre de la función por convención. Recibe el método dispatch y retorna callbacks. Esta función se puede definir de muchísimas formas distintas. */

const App = connect(
  mapStateToProps /* Se pueden poner null si no las necesitas */,
  mapDispatchToProps
)(
  Main
); /* devuelve una función que luego lo invocas con el componente Main. Acá le pasamos el estado global de la aplicación como parametros a las funciones mapState y mapDispatch */

export default App;

/* ESTO generaría lo siguiente: */
// <Main posts={ store.getState().posts comments=store.getState().comments}/>  Un componente con propiedades nuevas

// Otro ejemplo similar:
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionsCreators from "../actions";

import Main from "./Main.js";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

const App2 = connect(mapStateToProps, mapDispatchToProps)(Main);
// <Main posts={ store.getState().posts comments=store.getState().comments}/>
//       increment={store.dispatch(increment())}
//       decrement={store.dispatch(decrement())}
// export default App2;
// conecta a nuestro componente Main con redux. MapState se refiere a los estados y MapDispatch es para despachar acciones. Le podemos conectar la parte que necesitemos, le podemos poner null a mapStatestoProps si no la necesitamos o con mapDispatch ni ponerlo.
/* Cómo se entera nuestra aplicación que estamos trabajando con un store?? */

/* LO HACE EL COMPONENTE PROVIDER: */

import { Provider } from "react-redux";
import store from "./store.js";

const router = (
  <Provider store={store}>
    {/* así nuestra aplicación se entera del store . Necesitamos que nuestro main componente este abrazado por el provider store */}
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute componente={PhotoGrid} />
        <Route path="view/:postId" component={Singles} />
      </Route>
    </Router>
  </Provider>
);

/*
!---------- CONFIGURACIÓN DE REACT-REDUX APP ------------

!1) CONFIGURACIÓN DEL STORE
!MIDDLEWARE */
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk"; /* El middleware es el intermediario entre el componente y el store. Pq cuando pide dato como si fuera una api se trata de una tarea asincrona. Si lo pide directamente a trav;es del componente la página perdería ejecución hasta tanto tenga la respuesta del store. El middleware está para evitar esto. Me llega un dispatch que el middleware lo vee, lo manda a la api y cuando tengas una respuesta el middleware lo recibe y recién ahí le da la posibilidad de avanzar al reducer.*/

const store2 /* store */ = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() /* esto no permite ver que acciones se llevaron a cabo, de qué forma, qué estado tiene en este momento... */,
  applyMiddleware(thunkMiddleware) /* acá aplicamos el middleware */
);

// export default store; /* ESTO VA */

/*
!2)CONFIGURACIÓN DEL REDUCER 1:
*/

/* const initialState = {
  count: 0,
  loading: false,
  post: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: 0,
      }
    case 'GET_POST':
      return {
        ...state,
        loading: true,
      }
    case 'RECEIVE_POST':
      return {
        ...state,
        loading: false,
        post: action.post,
      }
    default:
      return {...state}
  }
} */

/*
!3)CONFIGURACIÓN DE LAS ACCIONES:
*/
import axios from "axios";

export function increment() {
  return {
    type: "INCREMENT",
  };
}
export function decrement() {
  return {
    type: "DECREMENT",
  };
}
export function reset() {
  return {
    type: "RESET",
  };
}

export function getPost() {
  return {
    type: "GET_POST",
  };
}

export function receivePost(post) {
  return {
    type: "RECEIVE_POST",
    post,
  };
}

/* ESTOS PEDIDOS A APIS (O ASINCRONOS) JAMÁS SE HACE EN EL REDUCER!!!!!!!!!!!!!!!!!!!!!!!! (este no es el archivo reducer, sino el de acciones.)*/
export function fetchPost(valor) {
  return function (dispatch) {
    dispatch(
      getPost()
    ); /* esta primer instancia va al type get post definido arriba function getPost() que luego en el reducer hace que loading pase a ser true ( loading: true,). Entonces esto va devuelta al reducer pq sí lo puede resolver y cambia el estado de loading a true. Y se vuelve a renderizar esta parte correspondiente a loading*/
    axios /* ahora llega la parte asincrona. Hace consulta a esta url con el valor (número) que recibió como parametro */
      .get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then(
        (r) => r.data
      ) /* accedes a un dato gracias al número que representa un id */
      .then((d) =>
        dispatch(receivePost(d))
      ) /* en d se aloja la respuesta que es el objeto entero del id y con esto hace un dispatch de receivePost. El middleware lo lee y lo manda a reduce => dispatch(receivePost(d))
      Ahora:
      loading: false,
      post: action.post que pasa a ser el objeto entero
      Ahora el estado está actualizado que eran propiedades del componente. Por lo tanto, se vuelve a renderizar y muestra en pantalla el funcionamiento.*/
      .catch((e) => console.log(e));
  };
} /* como devuelve una función pasa primero por el middleware para procesar esto. Si fuera una acción solamente iría directo al reduce.*/ /* EL REDUCER SOLO ACEPTA ACCIONES. NO ACEPTA FUNCIONES. */
/*
!4) CONFIGURACIÓN DEL COMPONENTE PRINCIPAL: */
import React from "react";
import { render } from "react-dom";
import Counter from "./src/components/Counter.jsx";
import Post from "./src/components/Post.jsx";
import { Provider } from "react-redux";
import store from "./src/store.js";

render(
  <Provider store={store}>
    {" "}
    {/* provider recibe store como propiedad obligatoria */}
    <div>
      <Counter />
      <Post />
    </div>
  </Provider>,
  document.getElementById("app")
);

/*
!5) CONFIGURACIÓN DE COMPONENTE HIJO COUNTER:
*/
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
    Clicked: {counter} times <button onClick={increment}>+</button>
    {/* le paso la definición de la función. NO ES LA INVOCACIÓN. Si le quiero pasar un parámetro tengo que hacer una función flecha
    PASOS QUE HACE:
    1) onClick = {store.dispatch(increment())}
    2) onClick = {store.dispatch({type: "INCREMENT"}) Esto va al reducer
    3) counter: state.count => 1*/}
    <button onClick={decrement}>-</button>
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

// LO DE ABAJO VA!!
/* export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter); */
/* Aca le pasas el componente que es Counter. Esto se importa. */

/*
!6) CONFIGURACIÓN DE COMPONENTE HIJO POST:
*/
import React from "react";
import axios from "axios";
import * as actionCreators from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const Post = ({ loading, post, fetchPost }) => (
  <div>
    <input name="id" />
    <button
      onClick={(e) => {
        e.preventDefault();
        const value =
          document.querySelector(
            "input"
          ).value; /* que tome el valor que se guardó en input */
        fetchPost(value);
      }}
    >
      get
    </button>
    <div>{loading ? "loading..." : post.title}</div>{" "}
    {/* si está cargando, muestra "loading...", si no, muestra el título */}
  </div>
);

function mapStateToProps(state) {
  return {
    post: state.post,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

/* ESTO DE ACÁ VA!!
export default connect(mapStateToProps, mapDispatchToProps)(Post);
 */
