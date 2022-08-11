import React, { useState } from "react";
import "../hoja-de-estilos/searchBar.css";

function SearchBar({ onSearch }) {
  // acá va tu código
  const [texto, setTexto] =
    useState(
      ""
    ); /* Necesitamos un estado de lo que se está escribiendo en el input */

  return (
    <div className="contenedor-buscador">
      <input
        className="buscador"
        type="text"
        placeholder="City..."
        onChange={(e) =>
          setTexto(e.target.value)
        } /* el evento adentro tiene un target y dentro del target al valor que es lo que tiene escrito en ese momento. Con el onChange vamos guardando la info. que escribe el usuario antes de hacer click en buscar. */
      />

      <button
        className="tarea-boton"
        onClick={(e) => {
          /* le pasamos una función que recibe el evento */
          e.preventDefault(); /* Hace que no se actualice o recarge la página */
          onSearch(texto);
        }}
      ></button>
    </div>
  );
}

export default SearchBar;
