import React, { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  /* Estos de arriba se podrían reemplazar con lo siguiente: */
  // const [input, setInput] = useState(
  //   (initialState = { username: "", password: "", error: "" })
  // );
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
      {!error ? null : <span>{error}</span>}
      {/* mira si en el estado de error hay un error, si hay lo muestra y sino no. */}
      <input
        name="password"
        value={password}
        placeholder="password"
        type="password" /* te sirve para que te la escriba como no te reconozco. Podes agregarle el ojita para ver si queres verlo o no según si se apreta el botón con el ojito o no. */
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
