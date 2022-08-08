import React from "react";

function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className="contenedor-buscador">
      <input
        className="buscador"
        type="text"
        placeholder="City..."
        name="texto"
      ></input>
      <button className="tarea-boton" onClick={onSearch}>
        Add
      </button>
    </div>
  );
}

export default SearchBar;
