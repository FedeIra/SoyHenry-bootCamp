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
              onClose={() =>
                onClose(ciudad.id)
              } /* le pasa a card la función de onClose con el id de la ciudad. Le pasa un callback que llama a la función con el id */
              key={ciudad.id}
            />
          );
        })
      ) : (
        <h1>No search yet</h1>
      )}
    </div>
  );
}

export default Cards;
