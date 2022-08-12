/*
!FORMULARIOS:
1) Controlados: valores de los inputs est;an asociados al estado del componente. Están bindeados el vínculo y el componente. Puedo ver que lo que está ingresando es correcto o no. Avisas errores mientras se completa. Tiene validaciones instantáneas.Podes desahilitiar el boton de submit hasta que este correcta la info. Podes forzar un formato de info con una regular expression.

2) No controlados: sacas el valor del DOM. El típico onSubmit o getelementby.
*/

/*
PAra empezar, si queremos trabajar con los input y forms tenemos que asignarle keys */

//!Ejemplo:
import React, { useState } from "react";

function Ejemplo({ lang }) {
  if (lang === "hun") {
    // Irarrazaval Federico T.
    return (
      <form>
        <input
          key="lastName" /* Hay que asignarle keys para poder trabajar con ellos. De lo contrario, js piensa que son todos lo mismo. Sirven para identificarlos internamente. Se les suele poner el mismo nombre que el name.*/
          type="text"
          placeholder="Vezetéknév"
          name="lastName"
        />
        <input
          key="firstName"
          type="text"
          placeholder="Keresztnév"
          name="firstName"
        />
        <input
          key="middleInitial"
          type="text"
          placeholder="KB"
          style={{ width: 30 }}
          name="middleInitial"
        />
      </form>
    );
  }
  // Federico T. Irarrazaval
  return (
    <form>
      <input
        /*   key="firstName" */
        type="text"
        placeholder="First Name"
        name="firstName"
      />
      <input
        /*   key="middleInitial" */
        type="text"
        placeholder="MI"
        style={{ width: 30 }}
        name="middleInitial"
      />
      <input
        /*   key="lastName" */
        type="text"
        placeholder="Last Name"
        name="lastName"
      />
    </form>
  );
}

export default function Lang() {
  const [lang, setLang] = useState("hun");

  return (
    <div>
      <Ejemplo lang={lang} />
      <button
        onClick={(e) => setLang((old) => setLang(old == "hun" ? "es" : "hun"))}
      >
        Lang
      </button>
    </div>
  );
}

//! EJEMPLO DE FORM NO CONTROLADO:

import React from "react";

class Uncontrolled extends React.Component {
  handleSubmit(e) {
    e.preventDefault(); /* hace un quert selector directo desde el DOM */
    const username = document.querySelector("input[name=username]").value;
    const password = document.querySelector("input[name=password]").value;
    console.log(username, password);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" placeholder="username ej: toni@gmail.com" />
        <input name="password" type="password" placeholder="password" />
        <input type="submit" />
      </form>
    );
  }
}

// export default Uncontrolled;

//! AHORA PARA CONTROLAR LO QUE SE VA INGRESANDO EN EL FORM:

import React, { useState } from "react";

export default function Form() {
  //form:
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //error:
  const [error, setError] = useState("");

  /* Estos de arriba se podrían reemplazar con lo siguiente: */
  // const [input, setInput] = useState({ username: "", password: "", error: "" });
  // input is an object with two properties, username and password

  function validateUser(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      /* los regular expression los podes armar en la siguiente página: https://regexr.com/ */ setError(
        "el usuario tiene que ser un email"
      );
    } else {
      setError("");
    }
    setUsername(
      value
    ); /* luego setea el username en el valor dado este bien o mal */
  } /* Esta es la función que invoca el estado para validar lo que se escribe en el input. Se pregunta si tiene: !/\S+@\S+\.\S+/. Lo testea y chequea que cumpla. Si cumple el setError pasa a estar vacío en lugar de tener el usuario tiene que ser un email*/


// Para el caso de que use un solo const para definir lo estados:
  // function validate(e) {
  //   if (e.target.name === "username") {
  //     if (!/\S+@\S+\.\S+/.test(value)) {
  //       setError(
  //         "el usuario tiene que ser un email"
  //       );
  //     } else {
  //       setError("");
  //     }
  //   } else if (e.target.password === "password") {
  //     if (!e.target.value.length > 4) {
  //       setError("la contraseña debe tener +4 caracteres")
  //     }
  //   }
  //   serUser({ ...user, [e.target.name]: e.target.value })
  //   // const pepe = "aux"
  //   // como poner el valor de una variable como nombre de prop
  //   // {[algo] : 5 }
  // }


  let onSubmit = (e) => {
    e.preventDefault(); //evitamos el comportamiento que tiene por default el evento onSubmit y evita que se recargue la página.
    console.log(username);
    console.log(password);
    console.log(error);
  };

  return (
    <form onSubmit={onSubmit}>
      {/* los forms usan onSubmit*/}
      <input
        className={
          error && "danger"
        } /* DICE: si es error es true entonces agregale una clase danger */
        name="username"
        value={username} /* ESTO es el valor del estado!!! */
        placeholder="username"
        onChange={(e) =>
          validateUser(e.target.value)
        } /* Y le dice que ante cada cambio invoca esta función. E es por evento. Invoca la función validateUser y pasale el valor que tengo acá*/
      />
      {!error ? null : <span>{error}</span>}{" "}
      {/* mira si en el estado de error hay un error, si hay lo muestra y sino no. */}
      <input
        name="password"
        value={password}
        placeholder="password"
        type="password" /* te sirve para que te la escriba como no te reconozco. Podes agregarle el ojita para ver si queres verlo o no según si se apreta el botón con el ojito o no. */
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" disabled={error? true: false } /* acá le decimos que si existe error se desabilita el submit del input */ />
    </form>
  );
}

//! COMO AGREGAR INFO. DE FORMA DINÁMICA
import React, { useState } from "react";

// Este es el Form con inputs dinamicos que armamos en el README.md de la teoria.

function DinamicInputs() {
  const modeloFamiliar = { nombre: "" };

  const [familiar, setFamiliar] = useState([]);
  /* Por ahora familiar es un arreglo con un objeto con propiedad nombre que está vacío */
  const [persona, setPersona] = useState({
    nombre: "",
  });
  //persona es un objeto con propiedad persona que está vacío
  const agregaFamiliar = () => {
    setFamiliar([...familiar, { ...persona }]);
    setPersona({ nombre: "" });
  }; /* Esta es la función que agrega un familiar al arreglo de familiares. Toma la vieja familiar y le agrega un nuevo familiar */

  const handlePersonaChange = (e) =>
    setPersona({
      ...persona /* esto es para que no se sobreescriba. El spread operator. */,
      [e.target.name]: e.target.value,
    }); /* cuando se modifica se dispara un evento y va reemplazando el nombre con lo que se haya escrito dentro del input. Se hace una copia del objeto entero de persona, y sobreescrib{i el valor que esta entre ´+*/

  const handleFamiliarChange = (e) => {
    const familiares = [...familiar];
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(familiar);
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* cuando clicke el input que es el submit */}
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre} /* persona es el estado que ya tenemos */
        onChange={handlePersonaChange}
      />
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
      />
      {familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
            type="text"
            name={`nombre-${i}`}
            id={i}
            data-name="nombre"
            value={el.nombre}
            onChange={handleFamiliarChange}
          />
        </div>
      ))}
      <input type="submit" value="Submit" />
    </form>
  ); /* esto se renderiza con cada familiar nuevo que se va agregando gracias al spread operator =  setFamiliar([...familiar, { ...modeloFamiliar }]);*/
}

// export default DinamicInputs;