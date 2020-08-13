const React = require('react');
const styled = require('styled-components');

const Name = ({ product }) => {
  const Container = styled.default.div``;
  const Heading = styled.default.h2`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 2.4em;
    color: #221924;
    font-weight: 400;
    font-size: 16px;
    transition: color .15s ease-out;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    font-family: sofia,arial,sans-serif;`;
  return (
    <Container>
      <Heading>{product.name}</Heading>
    </Container>
  );
};

module.exports = Name;
