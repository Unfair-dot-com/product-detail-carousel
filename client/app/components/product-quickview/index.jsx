const React = require('react');
const Card = require('../product-card/index.jsx');
const Description = require('./product-description.jsx');

const QuickView = ({ product }) => (
  <div className="product-quickview">
    <Card product={product} />
    <Description product={product} />
  </div>
);

module.exports = QuickView;
