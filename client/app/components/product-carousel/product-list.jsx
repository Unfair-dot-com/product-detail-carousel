const React = require('react');
const PropTypes = require('prop-types');
const style = require('styled-components').default;
const { css } = require('styled-components');
const Card = require('../product-card/index.jsx');

// const left = ({ position }) => css`left: ${position || 0}px;`;
const left = ({ position }) => css`transform: translateX(${position || 0}px);`;

const resize = ({ quickview }) => {
  let styling = '';
  if (quickview) {
    styling += css`min-width: 100%; width: 100%;`;
  }
  return styling;
};

const List = style.ul`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: transform 250ms cubic-bezier(.53,.34,.51,.9);
  transition-property: all;
  transform: translateX(0px);
  ${left}`;

const Product = style.li`
  position: relative;
  display: list-item;
  flex: 0 0 40%;
  max-width: 220px;
  min-width: 172px;
  margin: 0 8px 0 0;
  padding: 0;
  background: #fff;
  border-radius: 8px;
  ${resize}`;

const ProductList = (props) => {
  const {
    products,
    position,
    quickview,
    open,
    close,
  } = props;
  return (
    <List position={position}>
      {products.map((product) => (
        <Product key={product._id} quickview={quickview}>
          <Card
            product={product}
            quickview={quickview}
            open={open}
            close={close}
          />
        </Product>
      ))}
    </List>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image_url: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    review_score: PropTypes.number.isRequired,
    review_count: PropTypes.number.isRequired,
  })),
  position: PropTypes.number.isRequired,
  quickview: PropTypes.bool.isRequired,
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  products: PropTypes.array,
};

module.exports = ProductList;
