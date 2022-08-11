import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <img src={Logo} alt="logo" className="logo" />
      Henry - Weather App
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
