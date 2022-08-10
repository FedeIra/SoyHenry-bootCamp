import React from "react";
import "../hoja-de-estilos/searchBar.css";

function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className="contenedor-buscador">
      <input
        className="buscador"
        type="text"
        placeholder="City..."
        aria-label="Search"
      />
      <button onClick={onSearch} className="tarea-boton"></button>
    </div>
  );
}

export default SearchBar;
