'use strict';

var express = require('express');
const {
  listCharacter,
  addFamily,
  listFamilies,
  addCharacter,
  addQuote,
  showQuotes,
} = require('../models/model.js');

var router = express.Router();
var model = require('../models/model.js');

// Routes abajo:
// Get Family
router.get('/families', (req, res) => {
  res.status(200).json(listFamilies());
});

// add family
router.post('/families', (req, res) => {
  // const { family } = req.body;
  const family = req.body.family;
  res.status(200).json(addFamily(family));
});

// get characters
router.get('/characters', (req, res) => {
  const { family, pluckName } = req.body;
  res.status(200).json(listCharacter(family, pluckName));
});

// post addCharacter
router.post('/characters', (req, res) => {
  const { name, age, family } = req.body;
  let resultado = addCharacter(name, age, family);

  if (resultado) {
    res.status(200).json(resultado);
  } else {
    res.status(400).json({ msg: 'La familia ingresada no existe' });
  }
});

//  /characters/:name
router.get(`/characters/:name`, (req, res) => {
  const { name } = req.params;
  const { pluck } = req.query;

  res.status(200).json(listCharacter(name, Boolean(pluck)));
});

// quotes get
router.get(`/quotes`, (req, res) => {
  const { name } = req.body;

  res.status(200).json(showQuotes(name));
});

//  /quotes post
//     × POST agrega una nueva frase al personaje indicado y devuelve el mensaje indicado(18 ms)
router.post(`/quotes`, (req, res) => {
  const { name, quote, season } = req.body;

  let newQuote = {
    season,
    text: quote,
  };

  res.status(200).json(addQuote(name, newQuote));
});

// ---------------------------------------
module.exports = router;
// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
