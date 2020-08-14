const React = require('react');
const style = require('styled-components').default;
const { css } = require('styled-components');
const Container = require('../lib/container.jsx');
const Star = require('./star.jsx');

const Stars = (props) => {
  const cssFill = (props) => css`
    width: ${(props.product.review_score / 5) * 100}%;`;
  const FixedContainer = style(Container)`
    position: relative;
    width: 150px;
    height: 30px;`;
  const Background = style(Container)`
    position: absolute;
    left: 0;
    top: 0;
    background-color: grey;
    width: 150px;
    height: 30px;
    z-index: 10;`;
  const Stats = style(Container)`
    position: absolute;
    left: 0;
    top: 0;
    background-color: #f5b81d;
    height: 30px;
    z-index: 20;
    ${cssFill};`;
  const Fill = style(Container)`
    position: absolute;
    left: 0;
    background-color: #fff;
    width: 150px;
    height: 4px;
    z-index: 30;`;
  const FillTop = style(Fill)`
    top: 0;`;
  const FillBottom = style(Fill)`
    bottom: 0;`;
  const { product } = props;
  return (
    <FixedContainer>
      <Background />
      <Stats product={product} />
      <FillTop />
      <Star top="-30px" left="-45px" />
      <Star top="-30px" left="-15px" />
      <Star top="-30px" left="15px" />
      <Star top="-30px" left="45px" />
      <Star top="-30px" left="75px" />
      <FillBottom />
    </FixedContainer>
  );
};

module.exports = Stars;
