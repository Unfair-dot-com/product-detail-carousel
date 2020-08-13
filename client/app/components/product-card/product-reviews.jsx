const React = require('react');

const Reviews = ({ product }) => (
  <div className="product-reviews">
    <h2>{product.review_score}</h2>
    <h2>{product.review_count}</h2>
  </div>
);

module.exports = Reviews;
