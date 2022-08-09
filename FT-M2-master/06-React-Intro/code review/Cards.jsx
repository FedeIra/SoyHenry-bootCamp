import React from "react";
import Card from "./Card";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map

  // if (!cities) {
  //   return (
  //     <div>
  //       <h1>No se recibieron ciudades</h1>
  //     </div>
  //   );
  // }

  return (
    <div>
      { cities && cities.length > 0 ? (
        cities.map((ciudad, index) => {
          // [{},{},{}]
          //        c
          // console.log(ciudad)
          return (
            <Card
              key={ciudad.id}
              max={ciudad.main.temp_max}
              min={ciudad.main.temp_min}
              name={ciudad.name}
              img={ciudad.weather[0].icon}
              onClose={() => alert(ciudad.name)}
            />
          );
          // main --> temp_max
          // img --> weather 0 icon
        })
      ) : (
        <h1>No hay ciudades para mostrar</h1>
      )}
    </div>
  );
}

// OPERADOR TERNARIO ---> CONDICION ? SI ES TRUE HACE ESTO : SI ES FALSE HACE ESTO OTRO
// si es true          y si no:

//   cities.length > 0 ? cities.map() : <h1>
