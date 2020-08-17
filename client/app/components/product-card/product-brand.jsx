const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const Heading = require('../lib/heading.jsx');

const BrandContainer = style(Container)``;

const BrandHeading = style(Heading)`
  white-space: nowrap;`;

const Brand = ({ product }) => (
  <BrandContainer>
    <BrandHeading>{product.brand}</BrandHeading>
  </BrandContainer>
);

module.exports = Brand;
