const React = require('react');
const style = require('styled-components').default;
const Img = require('../lib/image.jsx');

const Image = ({ product }) => {
  const Container = style.div`
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    margin: -8px -8px 0;
    padding: 8px;`;
  return (
    <Container>
      <Img src={product.image_url} alt={product.name} />
    </Container>
  );
};

module.exports = Image;
