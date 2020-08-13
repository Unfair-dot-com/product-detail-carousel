const React = require('react');
const style = require('styled-components').default;
const { css } = require('styled-components');

const CarouselButton = (props) => {
  const cssButton = (props) => {
    if (props.side === 'left') {
      return css`left: 16px;`;
    }
    if (props.side === 'right') {
      return css`right: 16px;`;
    }
  };
  const cssSvg = (props) => {
    if (props.side === 'left') {
      return css`
        left: -1px;
        transform: scaleX(-1);`;
    }
    if (props.side === 'right') {
      return css`left: 1px;`;
    }
  };
  const Button = style.button`
    position: absolute;
    height: 48px;
    width: 48px;
    top: 50%;
    margin: 0;
    padding: 0;
    background: 0;
    transform: translateY(-50%);
    will-change: transform;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(34,25,36,.2);
    border: 2px solid transparent;
    transition-duration: .25s;
    transition-timing-function: cubic-bezier(.65,.05,.36,1);
    transition-property: background-color,transform,color,border-color,margin;
    z-index: 1;
    outline: none;
    tap-highlight-color: transparent;
    cursor: pointer;
    font-smoothing: antialiased;
    &:hover {
      transition-duration: .25s;
      transition-timing-function: cubic-bezier(.65,.05,.36,1);
      transition-property: background-color,transform,color,border-color,margin;
      border-color: #7f187f;
      box-shadow: 0 5px 10px rgba(34,25,36,.2);
      margin-top: -1px;
      background-color: #f7f3f6;
    }
    &:active {
      background-color: #e6d3e4;
    }
    ${cssButton};`;
  const Svg = style.svg`
    position: relative;
    width: 28px;
    height: 28px;
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;
    pointer-events: none;
    ${cssSvg};`;
  const Title = style.title``;
  const Path = style.path`
    d: path("M 11.3 8.9 c -0.4 0.4 -0.4 1 -0.1 1.4 l 3.5 3.8 l -3.4 3.8 c -0.4 0.4 -0.3 1 0.1 1.4 c 0.4 0.4 1 0.3 1.4 -0.1 l 4 -4.5 c 0.2 -0.2 0.3 -0.4 0.3 -0.7 s -0.1 -0.5 -0.3 -0.7 l -4 -4.5 c -0.4 -0.3 -1.1 -0.3 -1.5 0.1 Z");`;
  const { title } = props;
  const { side } = props;
  return (
    <Button side={side}>
      <Svg side={side}>
        <Title>{title}</Title>
        <Path />
      </Svg>
    </Button>
  );
};

module.exports = CarouselButton;
