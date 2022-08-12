import React, { useState } from "react";

export default function Form() {
  //form
  const [user, setUser] = useState({ username: "", password: "" });

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // error
  const [error, setError] = useState("");

  function validateUser(value) {
    if (!/\S+@\S+\.\S+/.test(value)) {
      setError("Debe ser un mail");
    } else {
      setError("");
    }
    // setUsername(value); ----> CAMBIAR
  }

  function validate(e) {
    if (e.target.name === "username") {
      if (!/\S+@\S+\.\S+/.test(e.target.value)) {
        setError("Debe ser un mail");
      } else {
        setError("");
      }
    } else if (e.target.name === "password") {
      if (!e.target.value.length > 4) {
        setError("la contraseña debe tener +4 caracteres");
      }
    }

    // COMPLETAR PARA TENER UN OBJETO CON ERRORES Y MOSTRARLOS EN PANTALLA
    // tu codigo aquí:

    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
    // const pepe = "aux"
    // como poner el valor de una variable como nombre de prop
    // { [pepe] : 5 }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
        // setUsername("");
        // setPassword("");  ---> CAMBIAR
        setUser({ username: "", password: "" });
      }}
    >
      <input
        className={error && "danger"}
        name="username"
        value={user.username}
        placeholder="username"
        onChange={(e) => validate(e)}
      />
      {!error ? null : <span>{error}</span>}
      <input
        name="password"
        value={user.password}
        placeholder="password"
        type="password"
        onChange={(e) => validate(e)}
      />
      <input type="submit" disabled={error ? true : false} />
    </form>
  );
}

// explicacion de un ternario:

// if(error){
//   true
// }else{
//   false
// }
