const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const Heading = require('../lib/heading.jsx');
const Stars = require('./stars.jsx');

const Reviews = ({ product }) => {
  const HeadingReviewCount = style(Heading)``;
  return (
    <Container>
      <Stars product={product} />
      <HeadingReviewCount>{product.review_count}</HeadingReviewCount>
    </Container>
  );
};

module.exports = Reviews;
