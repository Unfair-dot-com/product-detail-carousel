const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const Link = require('../lib/link.jsx');
const Image = require('./product-image.jsx');
const Name = require('./product-name.jsx');
const Brand = require('./product-brand.jsx');
const Price = require('./product-price.jsx');
const Reviews = require('./product-reviews.jsx');

const Card = ({ product }) => {
  const ContainerOuter = style(Container)``;
  const CardBox = style(Container)`
    position: relative;
    display: flex;
    flex-grow: 1;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(34,25,36,.2);
    transition: transform .2s cubic-bezier(.22,.61,.36,1);
    &:hover {
      transition: transform .2s cubic-bezier(.22,.61,.36,1);
      transform: translateY(-8px);
      box-shadow: 0 3px 6px rgba(34,25,36,.2);
    }`;
  const LinkCard = style(Link)`
    position: relative;
    width: 100%;
    display: flex;
    flex: 1 auto;
    flex-direction: column;
    padding: 8px;
    outline: 0;`;
  return (
    <ContainerOuter>
      <CardBox>
        <LinkCard href={product._id}>
          <Image product={product} />
          <Name product={product} />
          <Brand product={product} />
          <Price product={product} />
          <Reviews product={product} />
        </LinkCard>
      </CardBox>
    </ContainerOuter>
  );
};

module.exports = Card;
