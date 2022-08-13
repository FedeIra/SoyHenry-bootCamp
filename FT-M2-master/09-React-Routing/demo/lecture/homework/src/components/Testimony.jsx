import React from "react";
import "./Testimony.css";

function Testimony(props) {
  return (
    <div className="container-testimony-style">
      <img className="image-style" src={props.img} alt={`${props.name}`} />
      <div className="container-description-style">
        <h2>{`${props.name} en ${props.country}`}</h2>
        <h2>{`${props.category} en ${props.company}`}</h2>
        <p>{`${props.jobDescription}`}</p>
      </div>
    </div>
  );
}

export default Testimony;
