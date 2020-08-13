const React = require('react');
const style = require('styled-components').default;
const Heading = require('../lib/heading.jsx');

const Brand = ({ product }) => {
  const HeadingBrand = style(Heading)``;
  return (
    <HeadingBrand>{product.brand}</HeadingBrand>
  );
};

module.exports = Brand;
