const React = require('react');
const styled = require('styled-components');

const Image = ({ product }) => {
  const Container = styled.default.div`
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    margin: -8px -8px 0;
    padding: 8px;`;
  const Img = styled.default.img`
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #221924;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 400;
    font-family: sofia,arial,sans-serif;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    max-height: 100%;
    height: auto;
    border: 0;`;
  return (
    <Container>
      <Img src={product.image_url} alt={product.name} />
    </Container>
  );
};

module.exports = Image;
