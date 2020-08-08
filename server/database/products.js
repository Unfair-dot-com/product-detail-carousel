const db = require('./wrapper');

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

module.exports.insert = (documents) => db.insert('products', formatProducts(documents));
module.exports.find = (query = {}) => db.find('products', query);
module.exports.drop = () => db.drop('products');
