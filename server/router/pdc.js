const db = require('../database');

const get = (req, res, next) => {
  // console.log('routes.pdc.get req.body:', req.body);
  // console.log('routes.pdc.get req.params:', req.params);
  db.find().then((products) => {
    // console.log('routes.pdc.get db.find products:', products);
    res.json(products);
    res.end();
  }).catch((error) => {
    console.log('routes.pdc.get db.find error:', error);
    res.status(500);
    res.json('Server error');
    res.end();
  });
};

module.exports.get = get;
