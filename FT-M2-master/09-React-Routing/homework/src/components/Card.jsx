import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div id="closeIcon" className="row">
        <button onClick={onClose} className="btn btn-sm btn-danger">
          X
        </button>
      </div>
      <div className="card-body">
        <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">{name}</h5>
        </Link>
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
