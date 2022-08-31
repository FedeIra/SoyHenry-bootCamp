'use strict';

var express = require('express');
const model = require('../models/model');

var router = express.Router();

// escriban sus rutas acá
router.get('/categories', (req, res) => {
  res.json(model.listCategories());
});

// ----addCategory---
router.post('/categories', (req, res) => {
  let resultado;
  try {
    resultado = model.addCategory(req.body.category);
  } catch (error) {
    res.status(400).json({ error: `${error.message}` });
  }
  res.status(201).json({ msg: resultado });
});

// ----products---
// router.get('/products', (req, res) => {
//   const { category, fullName } = req.body;
//   try {
//     listProducts(category, fullName);
//   } catch (error) {
//     res.status(400).json({ error: `${error.message}` });
//   }
//   res.status(200).json({ msg: resultado });
// });
// siéntanse libres de dividir entre archivos si lo necesitan

module.exports = router;
