import React from "react";
import { render } from "react-dom";
import Form from "./src/components/Controlled.jsx"; /* se puede invocar asi el controlled también. No es necesario que la variable que se designe sea el mismo nombre del componente. */
import Uncontrolled from "./src/components/Uncontrolled.jsx";
import Controlled from "./src/components/Controlled.jsx";
import Ejemplo from "./src/components/Ejemplo.jsx";
import DynamicInputs from "./src/components/DynamicInputs.jsx";
import Prueba from "./src/components/Prueba.jsx";

/* render(
  <div>
    <h2>Ejemplo</h2>
    <DynamicInputs />
  </div>,
  document.getElementById("app")
); */

/* render(
  <div>
    <h2>Ejemplo</h2>
    <Form />
  </div>,
  document.getElementById("app")
); */

// Para ver EJEMPLO:
/* render(
  <div>
    <h2>Ejemplo</h2>
    <Ejemplo lang="hun" />
  </div>,
  document.getElementById("app")
); */

// Para ver uncontrolled:
/* render(
  <div>
    <h2>Ejemplo</h2>
    <Uncontrolled />
  </div>,
  document.getElementById("app")
); */

// Para ver controlled:
/* render(
  <div>
    <h2>Ejemplo</h2>
    <Controlled />
  </div>,
  document.getElementById("app")
); */
render(
  <div>
    <h2>Ejemplo</h2>
    <Prueba />
  </div>,
  document.getElementById("app")
);

// Para ver controlled2:
/* render(
  <div>
    <h2>Ejemplo</h2>
    <Controlled2 />
  </div>,
  document.getElementById("app")
); */
