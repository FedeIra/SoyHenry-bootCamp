/*
!PASOS:
1) CREAR EL PROVIDER,
2) CREAR EL STORE,
3) CREAR EL REDUCER,
4) CREAR ACCIONES
5) CREAR CONSTANTS
6) COMPLETAR REDUCER SEGÚN CORRESPONDA

!1) CREAR EL PROVIDER:
CONEXIÓN EN NUESTRA APLICACIÓN PRINCIPAL  */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// OTRO EJEMPLO:
import { Provider } from "react-redux";
import store from "./store.js";

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute componente={PhotoGrid} />
        <Route path="view/:postId" component={Singles} />
      </Route>
    </Router>
  </Provider>
);

// OTRO EJEMPLO:
import React from "react";
import { render } from "react-dom";
import Counter from "./src/components/Counter.jsx";
import Post from "./src/components/Post.jsx";
import { Provider } from "react-redux";
import store from "./src/store.js";

render(
  <Provider store={store}>
    <div>
      <Counter />
      <Post />
    </div>
  </Provider>,
  document.getElementById("app")
);

// OTRO EJEMPLO:
import React from "react";
import { render } from "react-dom";
//  import Counter from "./src/components/Counter.jsx";
import { Provider } from "react-redux";
//  import store from "./src/store.js";

render(
  <Provider store={store}>
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  </Provider>,
  document.getElementById("app")
);
/*
!2) CREAR EL STORE:
Va también lo que está comentado. El rootReducer es el nombre de la función reducer.*/
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// export default store;

// OTO EJEMPLO: Va también lo que está comentado.
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

// const store = createStore(
rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware);
// );
// export default store;

/*
!3) CREAR EL REDUCER:
Va lo que está comentado.*/
const GET_MOVIES = "GET_MOVIES";
const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

// const initialState = {
//   moviesFavourites: [],
//   moviesLoaded: [],
//   movieDetail: {},
// };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload),
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavourites: [state.moviesFavourites.splice(0, action.payload)],
      };
    default:
      return { ...state };
  }
  // Cambia el código encima de esta línea
};

// export default rootReducer;

//OTRO EJEMPLO:
// Va lo que está comentado.*/
const initialState = {
  count: 0,
  loading: false,
  post: {},
};

//  export default (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "DECREMENT":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     case "RESET":
//       return {
//         ...state,
//         count: 0,
//       };
//     case "GET_POST":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "RECEIVE_POST":
//       return {
//         ...state,
//         loading: false,
//         post: action.post,
//       };
//     default:
//       return { ...state };
//   }
// };

/* OTRO EJEMPLO:
Va lo que está comentado: */

// const initialState = {
//   count: 0,
//   data: {},
//   amigos: [],
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1,
//       }
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1,
//       }
//     case 'RESET':
//       return {
//         ...state,
//         count: 0,
//       }
//     default:
//       return {...state}
//   }
// }

/*
!4) CREAR ACCIONES:
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

export function fetchPost(valor) {
  return function (dispatch) {
    dispatch(getPost());
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then((respuesta) => respuesta.data)
      .then((respuesta) => dispatch(receivePost(respuesta.data)))
      .catch((e) => console.log(e));
  };
}

// OTRO EJEMPLO:
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

/*
!5 CREAR CONSTANTS:
Luego se importan en cada archivo que los necesite y pongo la variable sin comillas. Se pueden hacer en los actions sino. Va lo comentado:*/

// export const GET_MOVIES = "GET_MOVIES";
// export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
// export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
// export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";

/*!2) CONEXIÓN REACT-REDUX EN COMPONENTE(desde el contenedor o componente smart):
 */
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

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

/*




/*
!COMPONENTE COUNTER */
import React, { Component } from "react";
import { increment, decrement, reset, fetchPosts } from "../actions";
// import store from "../store.js";
import * as actionsCreators from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPost } from "../actions/index.js";
import axios from "axios";

const Counter = ({ counter, increment, decrement, reset, fetchPost }) => (
  <p>
    Clicked: {counter} times <button onClick={increment}>+</button>{" "}
    <button onClick={decrement}>-</button>{" "}
    <button onClick={reset}>Reset</button>
    <button onClick={() => fetchPost(counter)}>Fetch</button>
  </p>
);

const mapStateToProps = (state) => ({
  counter: state.count,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

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

/* ESTO VA:
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter); */

/*
!COMPONENTE POST
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
        const value = document.querySelector("input").value;
        fetchPost(value);
      }}
    >
      get
    </button>
    <div>{loading ? "loading..." : post.title}</div>
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

/*ESTO VA:
 export default connect(mapStateToProps, mapDispatchToProps)(Post); */

//! ---------------- OTRO EJEMPLO----------------------------

/*
!CONEXIÓN */
import React from "react";
import { render } from "react-dom";
//  import Counter from "./src/components/Counter.jsx";
import { Provider } from "react-redux";
//  import store from "./src/store.js";

render(
  <Provider store={store}>
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  </Provider>,
  document.getElementById("app")
);
/*

/*
!ACTION
*/
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

/*
!REDUCER:
*/

const initialState2 = {
  count: 0,
  data: {},
  amigos: [],
};

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         count: state.count + 1,
//       }
//     case 'DECREMENT':
//       return {
//         ...state,
//         count: state.count - 1,
//       }
//     case 'RESET':
//       return {
//         ...state,
//         count: 0,
//       }
//     default:
//       return {...state}
//   }
// }

/*
!COMPONENTE:
*/
import React, { Component } from "react";
// import store from '../store.js';
import { increment, decrement, reset } from "../actions/index.js";
import * as actionCreators from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Opcción 1:
//  - Valores: Acceder directamente al store desde el componente
//  - Actions: Despachar directo desde el componente

class Counter2 extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(() => {
      this.setState({
        count: store.getState().count,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    return (
      <p>
        Clicked: {this.state.count} times
        <button onClick={() => store.dispatch(increment())}>+</button>
        <button onClick={() => store.dispatch(decrement())}>-</button>
        <button onClick={() => store.dispatch(reset())}>Reset</button>
      </p>
    );
  }
}

// export default Counter;

// Opción 2A: Utilizar la función connect de 'react-redux'
//  - Valores: Utilizar mapStateToProps
//  - Actions: Pasar directamente las actions creators como segundo
//    parámetro del connect y acceder a ellas mediante props del componente
// IMPORTANTE: Hay un error común en el cual cuando quieren
// despachar las actions colocan directamente el nombre sin
// accederlo desde las props.
// Ejemplo: <button onClick={increment}>

//! ESTA ES LA FORMA DE CONECTAR MÁS RECOMENDADA:
class Counter2 extends Component {
  render() {
    return (
      <p>
        Clicked: {this.props.count} times
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.reset}>Reset</button>
      </p>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

/*ESTO VA:
export default connect(
  mapStateToProps,
  {increment, decrement, reset}
)(Counter); */

// Opción 2B:
//  - Actions: Utilizar mapDispatchToProps y acceder a ellas mediante props del componente

// La parte del componente queda igual, solo modificaremos el connect:

// function mapDispatchToProps(dispatch) {
//     return {
//     increment: function() {
//       dispatch(increment());
//     },
//     decrement: function() {
//       dispatch(decrement())
//     },
//     reset: function() {
//       dispatch(reset());
//     },
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);

// Opción 2C:
//  - Solo modificaremos el mapDispatchToProps para traer todas las actions
//  creators de una sin tener que especificar una por una. Para ello utilizaremos
//  el método bindActionCreators de 'redux'

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);
