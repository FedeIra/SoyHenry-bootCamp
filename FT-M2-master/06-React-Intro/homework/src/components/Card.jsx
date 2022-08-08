import React from "react";

function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div className="card">
      <div>
        <button className="boton-x" onClick={onClose}>
          X
        </button>
      </div>
      <div className="card-title">{name}</div>
      <div className="card-min">
        <h5>Min</h5>
        <span className="card-min">{Math.floor(min - 273)}°</span>
      </div>
      <div className="card-max">
        <h5>Max</h5>
        <span className="card-max">{Math.ceil(max - 273)}°</span>
      </div>
      <div className="img-card">
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
