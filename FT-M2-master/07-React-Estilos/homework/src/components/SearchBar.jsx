import React, { useState } from "react";
import "../hoja-de-estilos/searchBar.css";

function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setSearch] = useState("");

  return (
    <div className="contenedor-buscador">
      <input
        className="buscador"
        type="text"
        placeholder="City..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="tarea-boton"
        onClick={(e) => {
          e.preventDefault();
          onSearch(city);
        }}
      ></button>
    </div>
  );
}

export default SearchBar;
