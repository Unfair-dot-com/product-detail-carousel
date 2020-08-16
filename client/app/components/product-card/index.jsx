const React = require('react');
const style = require('styled-components').default;
const { css } = require('styled-components');
const Container = require('../lib/container.jsx');
const Link = require('../lib/link.jsx');
const Image = require('./product-image.jsx');
const Name = require('./product-name.jsx');
const Brand = require('./product-brand.jsx');
const Price = require('./product-price.jsx');
const Reviews = require('./product-reviews.jsx');
const Description = require('./product-description.jsx');
const QuickViewButton = require('./quickview-button.jsx');

const hide = (props) => {
  let styling = '';
  if (props.hide) {
    styling += css`display: none;`;
  }
  return styling;
};

const OuterShell = style(Container)`
  position: relative;`;

const InnerShell = style(Container)`
  display: flex;
  flex-wrap: nowrap;`;

const CardBox = style(Container)`
  position: relative;
  width: 40%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  transition: transform .2s cubic-bezier(.22,.61,.36,1);
  box-shadow: 0 3px 6px rgba(34,25,36,.2);
  &:hover {
    transition: transform .2s cubic-bezier(.22,.61,.36,1);
    transform: translateY(-8px);
    box-shadow: 0 3px 6px rgba(34,25,36,.2);
  }`;

const ProductLink = style(Link)`
  position: relative;
  display: flex;
  flex: 1 auto;
  flex-direction: column;
  padding: 8px;
  outline: 0;
  text-decoration: none;`;

const Card = ({ product, quickview, open, close}) => (
  <OuterShell>
    <InnerShell>
      <CardBox>
        <ProductLink href={product._id}>
          <Image product={product} />
          <Name product={product} />
          <Brand product={product} />
          <Price product={product} />
          <Reviews product={product} />
        </ProductLink>
      </CardBox>
      <Description product={product} hide={!quickview} close={close} />
    </InnerShell>
    <QuickViewButton
      name="Quickview"
      handleClick={open}
      removed={quickview}
    />
  </OuterShell>
);

module.exports = Card;
