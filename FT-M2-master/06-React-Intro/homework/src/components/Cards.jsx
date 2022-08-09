import React from "react";
import Card from "./Card";
import "../hoja-de-estilos/Cards.css";

function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div>
      {cities && cities.length > 0 ? (
        cities.map((ciudad) => {
          return (
            <Card
              max={ciudad.main.temp_max}
              min={ciudad.main.temp_min}
              name={ciudad.name}
              img={ciudad.weather[0].icon}
              onClose={() => alert(ciudad.name)}
              key={ciudad.id}
            />
          );
        })
      ) : (
        <h1>No hay ciudades para mostrar</h1>
      )}
    </div>
  );
}

export default Cards;
