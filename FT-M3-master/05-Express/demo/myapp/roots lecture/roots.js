//! PARA MODULARIZAR EL CODIGO:
let express = require('express');
let router = express.Router();

module.exports = router.get(`/`, (req, res) => {
  console.log('Estoy en /html');
  res.send(`<h1>estoy en /html</h1>`);
}); /* Podes poner distintas rutas, si no tenes ninguna para poner dejas barra. */
