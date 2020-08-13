const React = require('react');
const styled = require('styled-components');
const Heading = require('../lib/heading.jsx');

const Name = ({ product }) => {
  const HeadingName = styled.default(Heading)`
    height: 2.4em;
    margin-top: 8px;`;
  return (
    <HeadingName>{product.name}</HeadingName>
  );
};

module.exports = Name;
