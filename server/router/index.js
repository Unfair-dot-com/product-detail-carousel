const express = require('express');
const path = require('path');
const pdc = require('./pdc');

const router = express.Router();
const publicFolder = express.static(path.join(__dirname, '..', '..', 'public'));
router.use(express.json());
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
router.use('/products/', publicFolder);
router.use('/products/:id', publicFolder);
router.get('/api/pdc/:id', pdc.get);

module.exports = router;
