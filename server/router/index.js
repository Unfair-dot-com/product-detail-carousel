const express = require('express');
const path = require('path');
const pdc = require('./pdc');

const router = express.Router();
router.use(express.static(path.join(__dirname, '../../public')));
router.use(express.json());
router.get('/api/pdc/:id', pdc.get);

module.exports = router;
