const React = require('react');
const Card = require('../product-card/index.jsx');

const Carousel = ({ products }) => (
  <ul>
    {products.map((product) => (
      <li key={product._id}>
        <Card product={product} />
      </li>
    ))}
  </ul>
);

module.exports = Carousel;
