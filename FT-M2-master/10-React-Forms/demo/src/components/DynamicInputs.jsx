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

export default DinamicInputs;
