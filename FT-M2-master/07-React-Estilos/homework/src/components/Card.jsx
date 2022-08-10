import React from "react";
import "../hoja-de-estilos/Card.css";

function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className="ciudades">
      <div>
        <button className="boton-x" onClick={onClose}>
          X
        </button>
      </div>
      <div className="card-title">{name}</div>
      <div className="card-min-max">
        <h5>Min</h5>
        {/* <div className="card-max"> */}
        <h5>Max</h5>
      </div>
      <div className="card-min-max">
        <span>{Math.floor(min - 273)}°</span>
        <span>{Math.ceil(max - 273)}°</span>
      </div>
      <div className="App-logo">
        <img
          className="App-link"
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="imagen del clima"
        />
      </div>
    </div>
  );
}

export default Card;

/* import React from "react";
import "../hoja-de-estilos/Card.css";

function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className="card-contenedor">
      <div>
        <button className="boton-x" onClick={onClose}>
          X
        </button>
      </div>
      <div className="card-title">{name}</div>
      <div className="card-min">
        <h5>Min</h5>
        <div className="card-max">
          <h5>Max</h5>
          <span className="card-min">{Math.floor(min - 273)}°</span>
        </div>
        <span className="card-max">{Math.ceil(max - 273)}°</span>
      </div>
      <div className="App-logo">
        <img
          className="App-link"
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt="imagen del clima"
        />
      </div>
    </div>
  );
}

export default Card; */
