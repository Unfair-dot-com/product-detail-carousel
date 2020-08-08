const db = require('./connect');

const formatProduct = (document) => ({
  _id: Number.parseInt(document._id, 10) || undefined,
  name: String(document.name) || '',
  decription: String(document.description) || '',
  image_url: String(document.image_url) || '',
  brand: String(document.brand) || '',
  price: Number.parseFloat(document.price) || 0.0,
  review_score: Number.parseFloat(document.review_score) || 5.00,
  review_count: Number.parseInt(document.review_count, 10) || 0,
});

const formatProducts = (documents) => {
  if (!Array.isArray(documents)) {
    return [documents].map(formatProduct);
  }
  return documents.map(formatProduct);
};

const Promisify = (func) => new Promise((resolve, reject) => {
  func((error, success) => {
    if (error) {
      reject(error);
      return;
    }
    resolve(success);
  });
});

const products = () => Promisify((callback) => {
  db.then((pdc) => {
    pdc.collection('products', callback);
  });
});

const insert = (documents) => Promisify((callback) => {
  products().then((dataset) => {
    dataset.insertMany(formatProducts(documents), callback);
  });
});

const find = (query = {}) => Promisify((callback) => {
  products().then((dataset) => {
    dataset.find(query, { limit: 10 }).toArray(callback);
  });
});

module.exports.insert = insert;
module.exports.find = find;
