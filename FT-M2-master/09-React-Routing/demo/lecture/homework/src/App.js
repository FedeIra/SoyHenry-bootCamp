// IMPORTACIÓN
import React from "react";
import "./App.css";
import Testimony from "./components/Testimony.jsx";

function App() {
  return (
    <div className="app-style">
      <h1 className="title-style">
        Esto es lo que dicen nuestros alumnos sobre freeCodeCamp
      </h1>
      <Testimony />
    </div>
  );
}

export default App;
