/*
!WEB SERVER
Cualquier computadora o sistema que procese solicitudes (requests) y que devuelva una respuesta (response) a través de un protocolo de red.  */

/*
!SERVER BÁSICO:
*/

/*
!LEVANTAR UN SERVIDOR:
  */
var http = require("http"); // importamos el módulo http para poder trabajar con el protocolo. Es un módulo que viene nativo del core.

http
  .createServer(function (req, res) {
    // Creamos una serie de events listener, que van a escuchar por requests que ocurren en este socket. Accedo al módulo llamando a un método del módulo. Recibe dos parámetros el método. Req = request, res = response. Son objetos con sus propios métodos. Request es la petición del cliente y response lo q yo le voy a responder.
    //Para crear un response empezamos escribiendo el header
    res.writeHead(200, { "Content-Type": "text/plain" }); //Le ponemos el status code y algunos pair-values en el header. El 200 es el status code. Es el caso de éxito los 200. Dice con qué tipo de datos te va a contestar.
    res.end("Hola, Mundo!\n"); //te contesta esto usando las propiedades anteriores de text/plain.
  })
  .listen(3000, "127.0.0.1"); //Por último tenemos que especificar en que puerto y en qué dirección va a estar escuchando nuestro servidor. Le paso puerto 3000 y la dirección. Es la dirección que está reservada para el local host.

/*Para ejecutarlo:  node basico.js

Te lo deja escuchando en local host. Si entras te devuelve Hola, Mundo!*/

//! OTRO EJEMPLO MÁS COMPLEJO:

var http = require("http");
var fs = require("fs"); //Importamos el módulo fs que nos permite leer y escribir archivos del file system

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var html = fs.readFileSync(__dirname + "/html/index.html");
    res.end(html);
  })
  .listen(1337, "127.0.0.1");

/*Ahora el res end es la variable html que es un doc html. Te devuelve lo siguiente: Hola, Mundo! Bienvenidos!

/* readFileSync Lee de manera asincrónica. Hasta que no termina de leer no te lo devuelve. Sino te manda undefined. */

//! OTRO EJEMPLO:
//! SERVIDOR
var http = require("http");
var fs = require("fs"); //Importamos el módulo fs que nos permite leer y escribir archivos del file system

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var html = fs.readFileSync(__dirname + "/html/template.html", "utf8"); //Codificamos el buffer para que sea una String
    var nombre = "Soy Henry!"; //Esta es la variable con la que vamos a reemplazar el template
    html = html.replace("{nombre}", nombre); // Usamos el método replace es del objeto String
    res.end(html);
  })
  .listen(1337, "127.0.0.1");

/* Le agrega utf8 pq??
  Pq con replace estoy cambiando el {nombre} del html por la var nombre del servidor que es "Soy Henry!".

  Te devuelve el contenido de template.html

  La llave {nombre} es tan solo una manera de identificar la palabra. Podría ponerlo sin llave, o  #$nombre$# y va a funcionar igual*/

/*
!JSON SERVER
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
//!SERVER USANDO REQUEST (REQ) PARA SERVER HTML Y API

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    console.log(req); // te devuelve los datos de req.Es un objeto con info. sobre el request. Nos importa el req.url Otro que suele ser importante es el method: "GET"
    if (req.url === "/") {
      //Si la URL es / devolvemos el HTML
      res.writeHead(200, { "Content-Type": "text/html" });
      var html = fs.readFileSync(__dirname + "/html/index.html");
      res.end(html);
    }
    if (req.url === "/api") {
      //Si la URL es /api devolvemos el objeto
      res.writeHead(200, { "Content-Type": "application/json" });
      var obj = {
        nombre: "Juan",
        apellido: "Perez",
      };
      res.end(JSON.stringify(obj));
    }
  })
  .listen(1337, "127.0.0.1");

/*
CON ESTO EN BASE A SI ENTRO A localhost1337/ o localhost1337/api entro al server html o server json.

El tema es que si escribís algo distinto a estas dos opciones se queda esperando sin devolverte nada.
*/

//!SERVER USANDO REQUEST (REQ) PARA SERVER HTML Y API

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      var html = fs.readFileSync(__dirname + "/html/index.html");
      res.end(html);
    } else if (req.url === "/api") {
      res.writeHead(200, { "Content-Type": "application/json" });
      var obj = {
        nombre: "Juan",
        apellido: "Perez",
      };
      res.end(JSON.stringify(obj));
    } else {
      res.writeHead(404); //Ponemos el status del response a 404: Not Found
      res.end(); //No devolvemos nada más que el estado.
    }
  })
  .listen(1337, "127.0.0.1");

/* A diferencia del anterior le agrego un else que es un 404 ERROR. */
