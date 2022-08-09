import React from "react";

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <h1> {props.name} </h1>
      <div>
        <h3>Min {props.min} </h3>
        <h3>Max {props.max} </h3>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt="img clima"
        />
      </div>
      <button onClick={props.onClose}> X </button>
    </div>
  );
}
