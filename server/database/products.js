const db = require('./wrapper');

const formatProductImageUrl = (document) => {
  const url = document.image_url;
  if (typeof url === 'object' && url !== null) {
    return {
      small: String(url.small) || '',
      medium: String(url.medium) || '',
      large: String(url.large) || '',
    };
  }
  return {};
};

const formatProduct = (document) => ({
  _id: String(document._id) || '0',
  name: String(document.name) || '',
  description: String(document.description) || '',
  image_url: formatProductImageUrl(document.image_url),
  brand: String(document.brand) || '',
  price: String(document.price) || '$0.00',
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
module.exports.connection = db.connection;
