import React from "react";
import { NavLink, Link } from "react-router-dom";

/* CON
!LINK: */
/* export default function NavBar() {

  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/abouttt">Abouttt</Link>
      <br></br>
      <Link to="/aboutttttt">Aboutttttt</Link>
      <br></br>
      <Link to="/about/other">About Other</Link>
      <br></br>
      <Link to="/ejemplo">Ejemplo</Link>
    </div>
  );
} */

/* CON
!NAVLINK: */
export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink exact to="/">
        Home
      </NavLink>{" "}
      {/* Si le saco el exact deja activo cualquier otro componente que hayamos activado antes*/}
      <br></br>
      <NavLink to="/about" activeClassName="selected">
        About
      </NavLink>
      {/* Los NavLink solo pueden recibir activeClassName o  activeStyle*/}
      <br></br>
      <NavLink to="/abouttt">Abouttt</NavLink>
      <br></br>
      <NavLink to="/aboutttttt">Aboutttttt</NavLink>
      <br></br>
      <NavLink to="/about/other">About Other</NavLink>
      <br></br>
      <NavLink
        to="/ejemplo"
        activeStyle={{
          color: "green",
          backgroundColor: "yellow",
          fontWeight: "bold",
        }} /* cuando esta parado en barra ejemplo se pone green */
      >
        Ejemplo
      </NavLink>
    </div>
  );
} /* le letra de los links se agranda porque en el index.html le definimos un estilo:
<style type="text/css">
    .active {
      font-size: 45px;
      background-color: aqua;
      color: brown;
    }

    .selected {
      color: red;
    }
  </style>
*/
