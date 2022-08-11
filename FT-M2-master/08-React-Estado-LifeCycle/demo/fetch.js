/* Para que haga un pedido a la api.

Y lo que el usuario escribe en el input le pedimos a la api esa información sobre el input.

Para eso usamos fetch. Para hacer la llamada necesitas la appi key: 
(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)

En caso de que no exista puedo mostrar un mensaje que no existe.*/

function onSearch(ciudad) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
  )
    .then((r) => r.json())
    .then((recurso) => {
      if (recurso.main !== undefined) {
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon,
        };
        setCities((oldCities) => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
}

/*
!PROMESA:
Tiene un status de pendiente, resuelta o rechazada.Es como un if/else.

Esa promesa nos sirve para manejar cosas asíncronas. Lo hago dentro de una promeas, hago un tarea ahí y recién cuando esa promesa haya sido rechazada o resuelta recién ahí hago algo. Mientras la promesa se resuelve puedo seguir haciendo código.

Desde el input podemos tomar el valor y hacemos un fetch o AXIOS. La sintaxis del fetch está arriba.

Request axios Con axios podemos hacer pedidos de información. Necesitamos el get para obtener información.

*/

import axios from "axios";

axios(
  /* no hace falta meterle el get pq cuando no aclaras por default es una función get */
  "http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric"
).then((respuesta) =>
  console.log(respuesta.data)
); /* nos devuelve un objeto y dentro hay una propiedad data. En esa propiedad est;a lo que necesitamos de la api. DATA!! Por eso le agregamos a respuesta.data

  El pedido hay que hacerlo con el botón buscar. También se puede hacer cuando se monta. Con el input agarras el valor y con el boton buscar hace el axios.

  Si estás en un componente hay que importarlo.
  */
