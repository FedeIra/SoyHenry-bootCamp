import React from "react";
import SearchBar from "./SearchBar.jsx";
import "../hoja-de-estilos/Nav.css";

function Nav({ onSearch }) {
  return (
    /*    <nav className="navbar navbar-dark bg-primary">
      <SearchBar />
    </nav> */
    <nav className="navbar">
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
