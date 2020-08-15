const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const Heading = require('../lib/heading.jsx');

const HeadingBrand = style(Heading)``;

const Brand = ({ product }) => (
  <Container>
    <HeadingBrand>{product.brand}</HeadingBrand>
  </Container>
);

module.exports = Brand;
