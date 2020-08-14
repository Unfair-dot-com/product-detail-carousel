const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const Heading = require('../lib/heading.jsx');

const Name = ({ product }) => {
  const HeadingName = style(Heading)`
    display: -webkit-box;
    height: 2.4em;
    margin-top: 8px;`;
  return (
    <Container>
      <HeadingName>{product.name}</HeadingName>
    </Container>
  );
};

module.exports = Name;
