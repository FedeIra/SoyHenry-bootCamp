import React from "react";
import Card from "./Card";
import "../hoja-de-estilos/Cards.css";

function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map

  return (
    <div className="allCards">
      {cities && cities.length > 0 ? (
        cities.map((ciudad) => {
          return (
            <Card
              max={ciudad.max}
              min={ciudad.min}
              name={ciudad.name}
              img={ciudad.img}
              onClose={() => onClose(ciudad.id)}
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
