const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const ProductList = require('./product-list.jsx');
const Button = require('./button.jsx');

const Carousel = ({ products }) => {
  const OuterContainer = style(Container)`
    position: relative;
    overflow: hidden;`;
  const InnerContainer = style(Container)`
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
