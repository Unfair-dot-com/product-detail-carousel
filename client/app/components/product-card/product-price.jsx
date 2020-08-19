const React = require('react');
const PropTypes = require('prop-types');
const style = require('styled-components').default;

const Container = style.div`
  margin-top: 8px;`;

const PriceValue = style.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  color: #c4113f;
  font-size: 17.5px;
  line-height: 37.5px;
  @media screen and (min-width: 800px) {
    font-size: 25px;
  };`;

const Price = ({ price }) => (
  <Container>
    <PriceValue>{price}</PriceValue>
  </Container>
);

Price.propTypes = {
  price: PropTypes.string.isRequired,
};

module.exports = Price;
