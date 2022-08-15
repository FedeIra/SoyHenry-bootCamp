/*
!REDUX:
One-way Data Flow es el principio de React. Pero esto puede hacer que se pierda info. o generar inconsistencias.

Redux dice: pq no tenemos un centro de info. o cómputos y que no pertenezca a un componente en sí mismo. Un centro de información fuera de los componentes. Y todos los componentes pueden acceder a ellos, usándolos e incluso notificándolos.

Capacidad de que todos los componentes tengan conocimiento de la información mientras estén conectados al store. No significa que todos los componentes tengan que tener acceso al store. Los componentes no van en el store. Dentro del store vamos a tener estados globales para mi aplicación. Es un almacenador de estados.

Principios de Redux:
!1) Single source of truth:
Un único store por aplicación. No tiene porque estar vinculada a React necesariamente.
*/
console.log(store.getState());

/* Prints
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/

/*
!2) State is read-only:
Yo no puedo modificar el estado directamente. Para ello tenemos que pasar por determinados pasitos: función dispath que recibe un objeto (action) que tiene un type que describe el tipo de acción que se le pasa por string describiendo el cambio que se va a hacer.
*/
store.dispatch({
  type: "COMPLETE_TODO" /* acción */,
  index: 1,
});

store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED",
});

/*
!Changes are made with pure function
No se puede modificar con React. Redux es una bolsa donde pongo información. La única forma de modificar esta info. es DISPATCH...

!REDUCER:
Una vez que la accion fue dispatchada va al REDUCER que hace el cambio en el stock.

El reducer es una función que definimos nosotros. Es una función pura. Ante una misma entrada tiene que tener una misma salida. Además no tiene tareas asíncronas. Son funciones normales (no acepta Math.random()).

Es una función que recibe el dispatcher, analiza que tipo de info. quiere, evalua sobre todo lo que se haya definido, y lo ejecuta. El reducer SIEMPRE devuelve un nuevo estado.

Básicamente, el reducer se termina manejando con un SWITCH, recibe la acción, evalua el action type, y va al caso y ejecuta la acción.

Se puede definir varios reducers. En esos casos usamos una función que se llama combineReducers que permite usar más de un reducer

*/
function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case "COMPLETE_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true,
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

import { combineReducers, createStore } from "redux";
let reducer = combineReducers({ visibilityFilter, todos });
let store1 = createStore(reducer);

// EJEMPLO DE STORE (en pseudoCódigo):
/*
1) Creo el store
2) Creo el estado inicial
3) creo el reducer
4) luego defino la acción que hace el dispatch.
*/
const store2 = createStore(reducer);

// Inicialización
let initialState1 = {
  Owner: "Martina Scomazzon",
  account: 0,
};

//función REDUCER:
// si les agregamos muchos if's es mejor pasarlo a un switch case para hacerlo más ordenado y legible.

function reducer(state = initialState, action) {
  if (action.type === "DEPOSIT_10") {
    return {
      ...state /* esto es para no perder el resto del estado, por ejemplo, owner. */,
      account: state.account + 10,
    };
    // Devuelve el state: {owner: "Martina Scomazzon", account: 10}
  }
  if (action.type === "WITHDRAW_5") {
    return {
      ...state,
      account: state.account - 5,
    };
    // Devuelve el state: {owner: "Martina Scomazzon", account: -5} Si antes de este dispatch se había hecho el deposit 10 entonces te devolvería account: 5. State y action no son palabras reservadas sino convenciones.
  }
  if (action.type === "RANDOM") {
    return {
      ...state /* si no pongo estado me devuelve que el state es solo amount y saca la propiedad owner pq devuelve un nuevo estado. SE REDEFINE EL ESTADO.*/,
      account:
        state.account +
        action.amount /* el action se refiere a la acción de dispatch. Es por convención la palabra action */,
    };
  }
  /* ESTA FUNCIÓN SIEMPRE tiene que devolver un estado, por lo que le agrego lo siguiente para el caso de que no entre en ninguno de los if: */
  return { ...state }; // return state;  es el default! El que esta activo es en una copia del estado.
}

/* Las acciones son objetos que tiene como propiedad obligatoria type.
Le paso como estado por default initialState. Es para la primera instancia. Luego se va modificando. */

//Wallet.jsx
function Wallet() {
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "DEPOSIT_10",
            /* le puedo agregar las propiedad que quiera:*/ amount: 10,
          })
        }
      >
        Deposit $10
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "WITHDRAW_5",
          })
        }
      >
        Withdraw $5
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "RANDOM",
            amount: Math.random(),
          })
        }
      >
        Random
      </button>
      {/* este boton quiere que al apretar sobre el se agregue random cantidad de plata */}
    </div>
  );
}

// Podría tener la siguiente función renderizando account (summary.jsx):

function Summary() {
  owner;
  account;
}

/*
!ACTIONS
Son objetos con propiedad obligatoria de type, al que le podes agregar info. adicional.
*/
// incrementar en uno el counter
var INCREMENTAR_COUNTER = {
  type: "INCREMENTAR_COUNTER",
};
// decrementar en uno el counter
var DECREMENTAR_COUNTER = {
  type: "DECREMENTAR_COUNTER",
};

/* Los valores adicional pueden ser fijos o no. Qué pasa si quiero que depende de otra cosa el valor adicional que le paso?.
!ACTION CREATOR:
Es una función que devuelve una acción (que es un objeto). No aplica reduce, no hace otracosa que retornar una acción.

Usemos el mismo ejemplo que el anterior: */

// Action creator
function addMoney(amount) {
  return { type: "INCREMENT", amount };
}

//Función Reducer
function reducer(state = initialState, action) {
  if (action.type === "DEPOSIT_10") {
    return {
      ...state,
      account: state.account + 10,
    };
  }
  if (action.type === "INCREMENT") {
    return {
      ...state,
      account: state.account + action.amount,
    };
  }
  return { ...state };
}

//Wallet.jsx
function Wallet() {
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "DEPOSIT_10",
            amount: 10,
          })
        }
      >
        Deposit $10
      </button>
      <button onClick={() => dispatch(addMoney(10))}>Increment $ 10</button>
    </div>
  );
}

/* En resumen:
UX --> PIDE UN CAMBIO EN EL ESTADO ? DISPATCH(?) --> DISPATCH(ACTION) --> ACTION = {type: "ES_UN_STRING"}

El dispatch abre las puertas para poder llegar al reducer. Es la única forma de llegar a el. El reducer tiene el estado y la acción, modifica según corresponda y devuelve un nuevo estado. Luego esto cambia en la UX.*/

import * as actions from "./actionsCreators";
store.dispatch(actions.increment());
store.dispatch(actions.addComments());
store.dispatch(
  actions.removecomment()
); /* se coloca el store pq la función la provee el store */

/*
!REDUCERS:
Las acciones describen que algo pasó, pero no especifican cómo cambió el estado de la aplicación en respuesta. Esto es trabajo de los reducers:
*/

var reducer = function (state, action) {
  switch (action.type) {
    case "INCREMENTAR_COUNTER":
      return state + 1;
    case "DECREMENTAR_COUNTER":
      return state - 1;
    case "INCREMENTAR_N":
      return state + action.payload;
    default:
      return state; // caso por defecto
  }
};

// Otro ejemplo:

const addContact = (state, action) => {
  switch (action.type) {
    case "NEW_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "UPDATE_CONTACT":
      return {};
    case "DELETE_CONTACT":
      return {};
    case "EMPY_CONTACT_LIST":
      return {};
    default:
      return { ...state };
  }
};

/*
!COMBINE REDUCERS:
Cuando una aplicaicón es muy grande, podemso dividir nuestros reducers en archivos separados y mantenerlos complemente independientes y controlando datos específicos.

Ejemplo:*/

import { combineReducers } from "redux";

const todoApp = combineReducers({
  visibilityFilter,
  todos,
}); /* les vas agregando los reducers que fuiste creando pq al store no le podes pasar más de un reducer. */

export default todoApp;

/*
!STORE:
Características:
1) Contiene el estado de la aplicación,
2) Permite el acceso al estado via getState();
3) Permite que el estado sea actualizado via dispatch(action);
4) Registra los listeners via subscribe(listener);
5) Maneja la anulación del registro de los listeners via el retorno de la función de subscribe(listener)
*/

import { createStore } from "redux";
import todoApp from "./reducers";

let store3 = createStore(todoApp);

//! EJERCICIO CON TODO EN CONSOLA (en lugar de browser)
/* Si quiero trabajar con redux en la terminal (en lugar de browser) no lo puedo hacer con import*/

const redux = require("redux");

const initialState = {
  owner: "Federico",
  todo: [],
  completed: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todo: [...state.todo, action.text],
      };
    case "REMOVE":
      return {
        ...state,
        todo: state.todo.filter((text, i) => i !== action.index),
        completed: [
          ...state.completed,
          state.todo.filter((text, i) => i === action.index),
        ].flat(Infinity) /*[state.todo[action.index]] */,
      };
    default:
      return { ...state };
  }
};

const store = redux.createStore(reducer);

function addTodo(text) {
  return { type: "ADD", text };
}

function removeTodo(index) {
  return { type: "REMOVE", index };
}

store.subscribe(() => {
  console.log(store.getState());
}); /* con esto evito el console.log(store.getState()); Se imprime solo el estado cada vez que se manda un dispatch. Es como un listener. Se queda mirando lo que pasa en el store y cada vez que hay un cambio lo informa.*/

/* console.log(store.getState()); */
store.dispatch(addTodo("comprar pan"));
store.dispatch(addTodo("lavar"));
store.dispatch(addTodo("cocinar"));
store.dispatch(removeTodo(0));
store.dispatch(removeTodo(0));
/* console.log(store.getState()); */

/* {
  owner: 'Federico',
  todo: [ 'cocinar' ],
  completed: [ 'comprar pan', 'lavar' ]
} */
