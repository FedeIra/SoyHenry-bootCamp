/*
!JSON SERVER:
*/

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" }); //Vamos a devolver texto en formato JSON
    var obj = {
      nombre: "Juan",
      apellido: "Perez",
    }; //Creamos un objeto de ejemplo para enviar como response

    res.end(JSON.stringify(obj)); //Antes de enviar el objeto, debemos parsearlo y transformarlo a un string JSON. Convierte el objeto en javascript a JSON. Lo convierto a JSON pq el objeto es una dirección en memoria. Si le mando esta dirección de memoria a un cliente yo no sé que dirección de memoria va a tener el cliente, por eso lo ocnvierto al tipo de dato json y el de su lado lo pasa a objeto y lo guarda en su propio espacio de memoria.
  })
  .listen(1337, "127.0.0.1");

/* Te devuelve un servidor json con lo siguiente:
  {
  "nombre": "Juan",
  "apellido": "Perez"
}
*/
