const React = require('react');
const Image = require('./product-image.jsx');
const Name = require('./product-name.jsx');
const Brand = require('./product-brand.jsx');
const Price = require('./product-price.jsx');
const Reviews = require('./product-reviews.jsx');

const Card = ({ product }) => (
  <div className="product-card">
    <a href={product.url}>
      <Image product={product} />
      <Name product={product} />
      <Brand product={product} />
      <Price product={product} />
      <Reviews product={product} />
    </a>
  </div>
);

module.exports = Card;
