const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const Heading = require('../lib/heading.jsx');

const HeadingPrice = style(Heading)`
  color: #c4113f;
  font-size: 17.5px;
  line-height: 1.5;
  margin-top: 8px;`;

const Price = ({ product }) => (
  <Container>
    <HeadingPrice>{product.price}</HeadingPrice>
  </Container>
);

module.exports = Price;
