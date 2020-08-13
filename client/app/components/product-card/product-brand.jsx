const React = require('react');

const Brand = ({ product }) => (
  <div className="product-brand">
    <h2>{product.brand}</h2>
  </div>
);

module.exports = Brand;
