const React = require('react');
const styled = require('styled-components');
const Link = require('../lib/link.jsx');
const Image = require('./product-image.jsx');
const Name = require('./product-name.jsx');
const Brand = require('./product-brand.jsx');
const Price = require('./product-price.jsx');
const Reviews = require('./product-reviews.jsx');

const Card = ({ product }) => {
  const Container = styled.default.div``;
  const LinkCard = styled.default(Link)`
    position: relative;
    display: flex;
    flex: 1 auto;
    flex-direction: column;
    padding: 8px;
    outline: 0;`;
  return (
    <Container>
      <LinkCard href={product._id}>
        <Image product={product} />
        <Name product={product} />
        <Brand product={product} />
        <Price product={product} />
        <Reviews product={product} />
      </LinkCard>
    </Container>
  );
};

module.exports = Card;
