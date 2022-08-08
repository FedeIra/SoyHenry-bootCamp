import React from "react";

function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className="contenedor-weather-card">
      <button className="boton-x" onClick={onClose}>
        X
      </button>
      <div className="nombre-ciudad">{name}</div>
      <div className="temperaturas">
        <div>Min</div>
        <div>Max</div>
      </div>
      <div className="grados">
        <div className="grado-minimo">{Math.floor(min - 273)}°</div>
        <div className="grado-maximo">{Math.ceil(max - 273)}°</div>
      </div>
      <div className="contenedor-imagen-clima">
        <img
          className="imagen-clima"
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="imagen del clima"
        />
      </div>
    </div>
  );
}

export default Card;
