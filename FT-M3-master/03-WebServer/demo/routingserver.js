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
