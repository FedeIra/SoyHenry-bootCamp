var http = require("http");
const { home, perfil, api, artista } = require("./controlador");

const rutas = {
  "/": home,
  "/api": api,
  "/api/": api,
};

http
  .createServer(function (req, res) {
    // req.url -----> "/"

    if (rutas[req.url]) {
      // si rutas["/"]
      rutas[req.url](req, res);
    } else {
      if (req.url.substring(0, 5) === "/api/") {
        artista(req, res);
      } else {
        if (req.url.includes("20")) {
          perfil(req, res);
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("No encontramos la ruta solicitada");
        }
      }
    }
  })
  .listen(3000, console.log("Running on PORT:3000"));