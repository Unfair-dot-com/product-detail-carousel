const React = require('react');

const Name = ({ product }) => (
  <div className="product-name">
    <h2>{product.name}</h2>
  </div>
);

module.exports = Name;
