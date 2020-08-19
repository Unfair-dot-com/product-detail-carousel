const React = require('react');
const PropTypes = require('prop-types');
const style = require('styled-components').default;

const ButtonContainer = style.div`
  position: absolute;
  right: 10px;
  top: 10px;`;

const Button = style.button`
  color: #7f187f;
  padding: 0;
  text-decoration: underline;
  appearance: none;
  display: inline-block;
  transition-duration: .25s;
  transition-timing-function: cubic-bezier(.65,.05,.36,1);
  transition-property: background-color,transform,color,border-color;
  border-radius: 0;
  font-size: 100%;
  font-weight: 400;
  background: 0;
  cursor: pointer;
  border: 0;
  margin: 0;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px #1364f1, 0 0 4px #1364f1;
  }`;

const ButtonIcon = style.svg`
  color: #615c65;
  width: 28px;
  height: 28px;
  display: inline-block;
  fill: currentColor;
  vertical-align: middle;
  pointer-events: none;`;

const Close = style.path`
  d: path("M 15.4 14 l 3.3 -3.3 c 0.4 -0.4 0.4 -1 0 -1.4 s -1 -0.4 -1.4 0 L 14 12.6 l -3.3 -3.3 c -0.4 -0.4 -1 -0.4 -1.4 0 c -0.4 0.4 -0.4 1 0 1.4 l 3.3 3.3 l -3.3 3.3 c -0.4 0.4 -0.4 1 0 1.4 c 0.2 0.2 0.4 0.3 0.7 0.3 s 0.5 -0.1 0.7 -0.3 l 3.3 -3.3 l 3.3 3.3 c 0.2 0.2 0.5 0.3 0.7 0.3 s 0.5 -0.1 0.7 -0.3 c 0.4 -0.4 0.4 -1 0 -1.4 L 15.4 14 Z");`;

const CloseButton = ({ title, click }) => (
  <ButtonContainer>
    <Button onClick={click}>
      <title>{title}</title>
      <ButtonIcon>
        <Close />
      </ButtonIcon>
    </Button>
  </ButtonContainer>
);

CloseButton.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

module.exports = CloseButton;
