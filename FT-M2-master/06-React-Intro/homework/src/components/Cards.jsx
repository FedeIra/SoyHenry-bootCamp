import React from "react";
import Card from "./Card";
import "../hoja-de-estilos/Cards.css";

function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {props.cities.map((ciudad, index) => (
        <Card
          max={ciudad.main.temp_max}
          min={ciudad.main.temp_min}
          name={ciudad.name}
          img={ciudad.weather[0].icon}
          onClose={() => alert(ciudad.name)}
          key={index}
        />
      ))}
    </div>
  );
}

export default Cards;
