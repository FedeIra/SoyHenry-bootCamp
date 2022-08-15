import React from "react";
import { render } from "react-dom";
import {
  Route,
  Switch,
  Link,
  HashRouter as Router,
  useRouteMatch,
} from "react-router-dom"; /* Acá vamos a usar el HashRouter, pero se pone Router pq decimos HashRouter as Router */

function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      <Link to="/">Default</Link>{" "}
      {/* Acá le indicamos adonde quiero que me lleve */}
      <br></br>
      <Link to="/home">Home</Link>
      <br></br>
      <Link to="/exact">Exact</Link>
      <br></br>
      <Link to="/exact/another">Exact-Another</Link>
      <br></br>
      <Link to="/nostrict/">No Strict</Link>
      <br></br>
      <Link to="/nostrict">No Strict</Link>
      <br></br>
      <Link to="/strict">Strict No Slash</Link>
      <br></br>
      <Link to="/strict/">Strict Slash</Link>
      <br></br>
      <Link to="/sensitive">Sensitive</Link>
      <br></br>
      <Link to="/Sensitive">Sensitive Mayus</Link>
    </div>
  );
}

function Home(props) {
  console.log(props);

  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
    </div>
  );
}

/* Con el LINK te intenta llevar al to que indicas: EJEMPLO:  */
<Link to="/Sensitive">Sensitive Mayus</Link>;

/* Entonces va al Router y chequea con cuál coincide de los Route a los que se les indica el path. EJEMPLO: */
<Route path="/sensitive">
  <h2>No Sensitive</h2>
</Route>;

/* Adentro de los Route puede meter componentes o lo que quiera. */
/*
!ROUTER: es HashRouter: abraza a todos los Route
!SWITCH va revisando todas las rutas para ver que lo último coincida con el url que pasaste. Matchea con el primero que coincide con la url que se escribe. Si coincide lo renderiza lo que este adentro del Route.
!EXACT PATH: indica que el path tiene que hacer un match exacto. No le podes agregar nada al path tiene que ser exactamente igual. EXACTO TAMBIÉN ES ESTRICTO. ES MÁS RESTRICTIVO QUE EL STRICT
!STRICT PATH: es parecido el exact, pero además las barritas tienen que estar iguales. No le importa que venga una barrita detrás.
!SENSITIVE PATH: lo hace sensible a mayúscula y minúscula.
*/

const Root = (
  <Router>
    <NavBar />
    {/*  <Switch> */}
    <Route path="/" render={(props) => <Home info={props} />}>
      <Home />
    </Route>

    <Route exact path="/exact">
      <h2>Exact</h2>
    </Route>
    {/* <Route path="/exact/another">
        <h2>Another</h2>
      </Route> */}

    <Route path="/exact">
      <h2>Not Exact</h2>
    </Route>

    {/* <Route path="/nostrict/">
        <h2>Not Strict</h2>
      </Route> */}
    <Route path="/nostrict">
      <h2>Not Strict</h2>
    </Route>
    <Route strict path="/strict/">
      <h2>Strict</h2>
    </Route>
    {/* <Route strict path="/strict">
        <h2>Strict</h2>
      </Route> */}
    {/* <Route exact strict path="/strict">
        <h2>Strict</h2>
      </Route> */}
    {/* <Route sensitive path="/sensitive">
        <h2>Sensitive</h2>
      </Route>
      <Route sensitive path="/Sensitive">
        <h2>Sensitive Mayus</h2>
      </Route> */}
    <Route path="/sensitive">
      <h2>No Sensitive</h2>
    </Route>

    <Route path="/">
      <h2>Default</h2>
    </Route>
    {/*  </Switch> */}
  </Router>
);

render(Root, document.querySelector("#app"));
