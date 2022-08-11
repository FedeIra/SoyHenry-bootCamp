import React from "react";
import { render } from "react-dom";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import About from "./About.jsx";
import Ejemplo from "./Ejemplo.jsx";
import NavBar from "./NavBar.jsx";

function Home(props) {
  console.log(props);
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
    </div>
  );
}

const Root = (
  <Router>
    <NavBar />
    {/* <Switch> */}
    <Route /* exact */ path="/" render={(props) => <Home info={props} />}>
      {/* Puedo usar destructuring:
      <Route path="/" render={({location, match}) => <Home info={props} />}>
      */}
      {/* El exact indica que el componente home se renderiza UNICAMENTE cuando se encuentre en barra.
      Aca le digo que cuando este en el path / renderize Home.
      Al tener la palabra reservada exact, si hay algún otro componente que tenga el mismo path lo deja de renderizar.
      Por ejemplo, si entramos en el link home (http://127.0.0.1:5500/demo/demo-basic/dist/index.html#/home) se deja de mostrar el siguiente componente:
    <Route path="/">
      <h2>Default if no match</h2>
    </Route>

    <Route exact path="/" render={(props) => <Home info={props} />}>
    Qué le estoy pasando en el props?? El root me trae información, las siguientes 3 propiedades = 1) history, 2) location, 3) match.
    !HISTORY: la historia de mis moviemiento en la página
    !LOCATiON: donde estoy parado
    !MATCH: tiene 4 propiedad: url en la que estoy parado, path en la cual coincide o no mi componente, params que son los parametros que recibe y luego si patch es exactamente igual a la url en cuyo caso est;a en true o de lo contrario en false. Si exact está en true renderiza
    
    */}
      {/* <Home /> */}
    </Route>
    {/* <Route path="/about/other">
        <h2>About Other</h2>
      </Route> */}
    <Route path="/about">
      <About />
    </Route>
    <Route path="/aboutttttt" sensitive={false}>
      <h2>Aboutttttt</h2>
    </Route>
    {/*  <Route path="/about/other">
      <h2>About Other</h2>
    </Route> */}
    {/* Otra forma de rutearlo: */}
    {
      <Route componente={"/about/other"} sensitive strict>
        <h2>About Other</h2>
      </Route>
    }
    <Route path="/ejemplo">
      {/* le puedo pasar todos los componentes que quiera. El tema acá es que ya no puedo pasarle propiedades pq serían todas las mismas */}
      <Ejemplo nombre="Toni" apellido="Tralice" />
      <Ejemplo nombre="Fede" apellido="Ira" />
      <Ejemplo nombre="quien" apellido="sea" />
      <About /> {/* INCLUSO UNO Q ESTABA EN OTRO PATH */}
    </Route>
    <Route path="/">
      <h2>Default if no match</h2>
    </Route>
    {/* </Switch> */}
  </Router>
);

render(Root, document.querySelector("#app"));
