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
