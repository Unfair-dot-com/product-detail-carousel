const React = require('react');

const Image = ({ product }) => (
  <div className="product-image">
    <img src={product.image_url} alt={product.name} />
  </div>
);

module.exports = Image;
