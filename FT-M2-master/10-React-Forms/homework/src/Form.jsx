import React from "react";

export function validate(input) {
  /* no la necesitamos exportar pq la vamos a usar acá dentro. Si la queremos usar afuera tenemos que exportarla. */
  let errors =
    {}; /*  const [errors, setErrors] = React.useState({}); Se agarra de este state para tirar errores */
  if (!input.username) {
    errors.username = "Username is required";
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = "Username is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = "Password is invalid";
  }

  return errors;
}

export default function Form() {
  const [user, setUser] = React.useState({ username: "", password: "" });

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function (e) {
    setErrors(
      validate({ ...user, [e.target.name]: e.target.value })
    ); /* esto es para pasarle el user actualizado. Tenemos que generar una copia. */
    setUser({
      ...user /* este input es para que se mantengan las otras propiedades. Toma todo lo que haya dentro de... */,
      [e.target.name]:
        e.target
          .value /* Te agarras del lugar donde se generó el evento (que es el target y accedes al name que es su propiedad) */,
    });
  }; /* sirve para manejar el change del input */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user.username);
    console.log(user.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          className={errors.username && "danger"}
          type="text"
          name="username"
          onChange={handleInputChange}
          value={user.username}
        />
        {errors.username && <p className="danger">{errors.username}</p>}
      </div>
      <br />
      <br />
      <div>
        <label>Password:</label>
        <input
          className={errors.password && "danger"}
          type="password"
          name="password"
          onChange={handleInputChange}
          value={user.password}
        />
        {errors.password && <p className="danger">{errors.password}</p>}
      </div>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
