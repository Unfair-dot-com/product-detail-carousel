const React = require('react');
const style = require('styled-components').default;
const Heading = require('../lib/heading.jsx');

const Name = ({ product }) => {
  const HeadingName = style(Heading)`
    height: 2.4em;
    margin-top: 8px;`;
  return (
    <HeadingName>{product.name}</HeadingName>
  );
};

module.exports = Name;
