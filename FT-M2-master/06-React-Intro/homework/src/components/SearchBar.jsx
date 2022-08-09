import React from "react";
import "../hoja-de-estilos/searchBar.css";

function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <div className="contenedor-buscador">
        <input
          className="buscador"
          type="text"
          placeholder="City..."
          aria-label="Search"
        />
        <button onClick={props.onSearch} className="tarea-boton"></button>
      </div>
    </div>
  );
}

export default SearchBar;
