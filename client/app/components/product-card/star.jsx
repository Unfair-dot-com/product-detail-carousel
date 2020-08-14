const React = require('react');
const style = require('styled-components').default;
const { css } = require('styled-components');
const Container = require('../lib/container.jsx');

const Star = (props) => {
  const cssPosition = (props) => css`
    top: ${props.top};
    left: ${props.left};`;
  const FixedContainer = style(Container)`
    position: absolute;
    width: 120px;
    height: 90px;
    transform: scale(0.25);
    z-index: 30;
    ${cssPosition};`;
  const Fill = style(Container)`
    position: absolute;
    top: 0;
    background-color: #fff;
    width: 16px;
    height: 90px;`;
  const FillLeft = style(Fill)`
    left: 0;`;
  const FillRight = style(Fill)`
    left: 104px;`;
  const Svg = style.svg`
    position: absolute;
    top: 0;
    left: 15px;
    height: 90px;
    width: 90px;`;
  const Polygon = style.polygon`
    fill: #fff;`;
  const { top, left } = props;
  return (
    <FixedContainer top={top} left={left}>
      <FillLeft />
      <Svg height="90px" width="90px">
        <Polygon points="0,0 45,0 35,35 0,35" />
        <Polygon points="45,0 90,0 90,35 55,35" />
        <Polygon points="0,35 30,53 15,90 0,90" />
        <Polygon points="15,90 45,65 45,65 75,90" />
        <Polygon points="60,53 90,35 90,90 75,90" />
      </Svg>
      <FillRight />
    </FixedContainer>
  );
};

module.exports = Star;
