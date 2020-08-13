const React = require('react');
const styled = require('styled-components');
const Heading = require('../lib/heading.jsx');

const Brand = ({ product }) => {
  const HeadingBrand = styled.default(Heading)``;
  return (
    <HeadingBrand>{product.brand}</HeadingBrand>
  );
};

module.exports = Brand;
