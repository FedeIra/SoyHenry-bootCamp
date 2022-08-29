var express = require("express");
var morgan = require("morgan");

var baseDatos = [];
const PORT = 3000;
// app --> instancia de aplicacion de express, preparada para recibir configuracion
var app = express();

app.use(express.json());

// Configuración de nuestros middlewares
// app.use("/", function (req, res, next) {
//   console.log("Hicieron un Request a " + req.url);
//   next(); // ---> oK solicitud, avanza hacia el siguiente middleware
// });

// configurar una ruta basica
// 1 param. metodo HTTP
app.get("/", (req, res) => {
  console.log("llegue");
  // No declaramos status code? cual llega?
  // tampoco dijimos el tipo de contenido que ibamos a enviar

  res.send("Hello world");
});

// crear un usuario
// como le envio body desde el front? ----> axios.post("locahost:3000/create", state)
app.post("/create", (req, res) => {
  const { name } = req.body;

  if (!name) res.sendStatus(400).send("Faltan datos");
  else {
    baseDatos.push(req.body);
    res.json({ msg: "Success", db: baseDatos });
  }
});

// recibir datos por parametro
// desde el front --> axios.post(`http://localhost:3000/params/${id}`)
app.post("/params/:a/:b/:c", (req, res) => {
  res.json({ a: req.params });
});

// ruta con query
// desde el front --> axios.post(`http://localhost:3000/params/?identificador=${id}`)

app.post("/query", (req, res) => {
  const { identificador } = req.query;
  res.json({ a: req.query, b: identificador });
});

// Ruta con un middleware para si misma
app.get("/api/:id", morgan("dev"), morgan("common"), function (req, res) {
  res.json({ parametro: req.params.id });
});

app.get("*", function (req, res) {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Running on PORT:${PORT}`);
});
