var fs = require("fs");
var http = require("http");

// Escribí acá tu servidor
/* Tenemos que ir mostrando dependiendo de la ruta una imagen o la otra que estan en images.

content type http: tenes todos los tipos de contenido. hay uno q es una tablita que sirve para la imagen. Ya no es TEXTO.
Image

	image/gif
image/jpeg
image/png
image/tiff
image/vnd.microsoft.icon
image/x-icon
image/vnd.djvu
image/svg+xml
*/

http
  .createServer(function (req, res) {
    fs.readFile(`./images${req.url}.jpg`, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("img not found");
      } else {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
      }
    });
  })
  .listen(1337, "127.0.0.1");

//function to readfile according to the url

/* http
  .createServer(function (req, res) {
    if (req.url === "/arcoiris_doge") {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      let img = fs.readFile(`./images${req.url}.jpg`);
      res.end(img);
    }
  })
  .listen(1337, "127.0.0.1"); */
