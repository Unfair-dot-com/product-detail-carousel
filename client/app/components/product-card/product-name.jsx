const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const Heading = require('../lib/heading.jsx');

const HeadingName = style(Heading)`
  display: -webkit-box;
  height: 2.4em;
  margin-top: 8px;`;

const Name = ({ product }) => (
  <Container>
    <HeadingName>{product.name}</HeadingName>
  </Container>
);

module.exports = Name;
