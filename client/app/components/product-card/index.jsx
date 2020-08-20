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

const Card = (props) => {
  const {
    product,
    quickview,
    open,
    close,
  } = props;
  return (
    <OuterContainer>
      <InnerContainer>
        <CardBox>
          <ProductLink href={product.url}>
            <Image imageURL={product.image_url} name={product.name} />
            <Name name={product.name} />
            <Brand brand={product.brand} />
            <Price price={product.price} />
            <Reviews
              score={product.review_score}
              count={product.review_count}
            />
          </ProductLink>
        </CardBox>
        <Description
          url={product.url}
          description={product.description}
          hide={!quickview}
          close={close}
          fullDetailsLinkTitle="See Full Details"
        />
      </InnerContainer>
      <QuickViewButton
        title="Quickview"
        click={() => open(product.id)}
        removed={quickview}
      />
    </OuterContainer>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image_url: PropTypes.shape({
      small: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
      large: PropTypes.string.isRequired,
    }),
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    review_score: PropTypes.number.isRequired,
    review_count: PropTypes.number.isRequired,
  }).isRequired,
  quickview: PropTypes.bool.isRequired,
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

module.exports = Card;
