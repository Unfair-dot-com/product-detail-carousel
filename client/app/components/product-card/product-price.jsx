const React = require('react');

const Price = ({ product }) => (
  <div className="product-price">
    <h2>{product.price}</h2>
  </div>
);

module.exports = Price;
