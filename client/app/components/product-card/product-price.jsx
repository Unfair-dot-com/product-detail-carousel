const React = require('react');
const styled = require('styled-components');
const Heading = require('../lib/heading.jsx');

const Price = ({ product }) => {
  const HeadingPrice = styled.default(Heading)`
    color: #c4113f;
    font-size: 17.5px;
    line-height: 1.5;
    margin-top: 8px;`;
  return (
    <HeadingPrice>{product.price}</HeadingPrice>
  );
};

module.exports = Price;
