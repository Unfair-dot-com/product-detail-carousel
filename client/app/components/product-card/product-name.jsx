const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const Heading = require('../lib/heading.jsx');

const NameContainer = style(Container)`
  margin-top: 8px;`;

const HeadingName = style(Heading)`
  display: -webkit-box;
  height: 2.4em;
  `;

const Name = ({ product }) => (
  <NameContainer>
    <HeadingName>{product.name}</HeadingName>
  </NameContainer>
);

module.exports = Name;
