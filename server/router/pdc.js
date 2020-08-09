const db = require('../database');

const get = (req, res, next) => {
  console.log('routes.pdc.get req.body:', req.body);
  console.log('routes.pdc.get req.params:', req.params);
  db.find().then((products) => {
    res.json(products);
    res.end();
  }).catch((error) => {
    console.log('routes.pdc.get db.find error:', error);
  });
};

module.exports.get = get;
