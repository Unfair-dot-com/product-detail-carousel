const React = require('react');
const PropTypes = require('prop-types');
const style = require('styled-components').default;
const Link = require('../lib/link.jsx');
const Image = require('./product-image.jsx');
const Name = require('./product-name.jsx');
const Brand = require('./product-brand.jsx');
const Price = require('./product-price.jsx');
const Reviews = require('./product-reviews.jsx');
const Description = require('./product-description.jsx');
const QuickViewButton = require('./quickview-button.jsx');

const OuterContainer = style.div`
  position: relative;`;

const InnerContainer = style.div`
  display: flex;
  flex-wrap: nowrap;`;

const CardBox = style.div`
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
  <OuterContainer>
    <InnerContainer>
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
    </InnerContainer>
    <QuickViewButton
      name="Quickview"
      handleClick={() => open(product._id)}
      removed={quickview}
    />
  </OuterContainer>
);

Card.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image_url: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    review_score: PropTypes.number.isRequired,
    review_count: PropTypes.number.isRequired,
  }),
  quickview: PropTypes.bool.isRequired,
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

Card.defaultProps = {
  product: PropTypes.object,
};

module.exports = Card;
