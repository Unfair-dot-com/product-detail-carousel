const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const Heading = require('../lib/heading.jsx');

const PriceContainer = style(Container)`
  margin-top: 8px;`;

const HeadingPrice = style(Heading)`
  color: #c4113f;
  font-size: 17.5px;
  line-height: 1.5;
  @media screen and (min-width: 800px) {
    font-size: 25px;
  };`;

const Price = ({ product }) => (
  <PriceContainer>
    <HeadingPrice>{product.price}</HeadingPrice>
  </PriceContainer>
);

module.exports = Price;
