import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk"; /* El middleware es el intermediario entre el componente y el store. Pq cuando pide dato como si fuera una api se trata de una tarea asincrona. Si lo pide directamente a trav;es del componente la página perdería ejecución hasta tanto tenga la respuesta del store. El middleware está para evitar esto. Me llega un dispatch que el middleware lo vee, lo manda a la api y cuando tengas una respuesta el middleware lo recibe y recién ahí le da la posibilidad de avanzar al reducer.*/

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() /* esto no permite ver que acciones se llevaron a cabo, de qué forma, qué estado tiene en este momento... */,
  applyMiddleware(thunkMiddleware) /* acá aplicamos el middleware */
);

export default store;
