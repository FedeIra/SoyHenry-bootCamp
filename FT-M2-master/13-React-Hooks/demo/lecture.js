/*
!HOOKS
Solo funcionan en componentes de función.

!USE STATE
*/
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Example() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

/*
!USE EFFECT
Es lo equivalente a componentdidmount, etc. pero para clases*/

/*
!1) Use effect default:
*/
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} time`;
  });
}
/* De forma predeterminada, React ejecuta los efectos después del primer renderizado y después de cada actualización. Se ejecuta cuando se renderiza por primera vez y entre cada actualización.

!Use effect componentDidMount:

!Se ejecuta siempre:
*/
useEffect(() => {
  alert("hola");
}); /* Si se lo paso sin [] me lo va a ejecutar cuando se renderize el componente y cuando se actualize cualquier estado.
Se ejecuta una única vez al renderizarse el componente. Para eso hay que pasarle una única dependencia. Se le pasa un arreglo vacío.

!Se ejecuta una sola vez:
*/
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("this componente has been mounted");
  }, []);
}

function componentDidMount() {
  this.props.movie.dispatch(getMovieDetail(id));
} /* Esta en con clases.

A continuación con useEffect! */
useEffect(() => {
  dispatch(getMovie(id));
}, []); /* El arreglo vacíon son dependencias. Acá le estamos diciendo que no depende de nadie. Si la DEPeNDENCIA ESTÁ VACÍA SE EJECUTA UNA ÚNICA VEZ */

/*
!Si quiero actualizarlo cada vez que uno de los componentes se actualize lo tengo que aclarar dentro del []

!COMPONENT DID UPDATE
*/
function Ejemplo() {
  let [hola, setHola] = useState(""); /* ESTADO LOCAL */
}
function OtroEjemplo() {
  let [chau, setChau] = useState("");
}

useEffect(() => {
  dispatch(getMovie(id));
}, [
  count,
]); /* acá quiero que se ejecute cada vez que se actualiza el estado del store count, o le puedo poner cualquier estado local como hola o chau. Por ejemplo: */

useEffect(() => {
  dispatch(getMovie(id));
}, [count, hola, chau]);

function mapStateToProps(state) {
  return {
    count: state.count /* ESTADO DEL STORE */,
  };
}

export default connect(mapStateToProps)(Ejemplo);
{
  /* <Ejemplo count=state.count/> */
}

/*
!COMPONENT DID UNMOUNT:
Se ejecuta una única vez. Se le tiene que incluir un return() => ...
*/
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => console.log("this componente has been mounted");
  }, []);
}

/*
!HOOK USE REDUCER  */
/* Lo puedo usar en lugar de llamar los MapFunctions: */
// Creo el store con los reducers:
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Componente:
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

/*
!HOOK USE SELECTOR Y USE DISPATCH */
/* VIENE A REEMPLAZAR EL MAPSTATETOPROPS PARA NO USAR EL CONNECT */
function Ejemplo() {
  let count = React.useSelector((state) => state.count);
  let name = React.useSelector((state) => state.name);
}
/*
function mapStateToProps(state) {
  return {
    count: state.count,
    name: state.name,
  };
} */

/* Puedo hacer algo similar con el dispatch de mapDispatchtoProps */
function Ejemplo() {
  let count = React.useSelector((state) => state.count);
  let name = React.useSelector((state) => state.name);

  const dispatch = React.useDispatch(); /* Estpo en lugar de this.props.dispatch */

  handleClick() = () => { dispatch(addMovie()) }; // si la quiero usar
}

/* function mapDispatchtoProps(dispatch) {
  return {
    addMovie: () => dispatch(addMovie),
  };
} */

/*
!HOOK USE REF:
Permite generar una referencia a un elemento de tu DOM. */

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // "current" apunta al elemento de entrada de texto montado
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}