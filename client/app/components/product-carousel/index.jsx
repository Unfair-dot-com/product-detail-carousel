const React = require('react');
const style = require('styled-components').default;
const ProductList = require('./product-list.jsx');
const Button = require('./button.jsx');

const Carousel = ({ products }) => {
  const OuterContainer = style.div`
    position: relative;
    overflow: hidden;`;
  const ButtonLeft = style(Button)`
    left: 16px;`;
  const ButtonRight = style(Button)`
    right: 16px`;
  const InnerContainer = style.div`
    padding: 12px 4px;
    overflow: hidden;`;
  return (
    <OuterContainer>
      <Button side="left" title="Previous Slide" />
      <InnerContainer>
        <ProductList products={products} />
      </InnerContainer>
      <Button side="right" title="Next Slide" />
    </OuterContainer>
  );
};

module.exports = Carousel;
