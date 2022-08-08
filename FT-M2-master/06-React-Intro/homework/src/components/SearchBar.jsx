import React from "react";

function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className="contenedor-buscador">
      <input
        className="buscador"
        type="text"
        placeholder="Ciudad..."
        name="texto"
      ></input>
      <button className="tarea-boton" onClick={onSearch}>
        Agregar
      </button>
    </div>
  );
}

export default SearchBar;
