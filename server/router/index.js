const express = require('express');
const path = require('path');
const pdc = require('./pdc');

const router = express.Router();
const publicFolder = express.static(path.join(__dirname, '../../public'));
router.use(express.json());
router.use('/', publicFolder);
router.use('/:id', publicFolder);
router.get('/api/pdc/:id', pdc.get);

module.exports = router;
