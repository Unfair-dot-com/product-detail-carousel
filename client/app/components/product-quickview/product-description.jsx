const React = require('react');

const Description = ({ product }) => (
  <div className="product-description">
    <h2>{product.description}</h2>
  </div>
);

module.exports = Description;
