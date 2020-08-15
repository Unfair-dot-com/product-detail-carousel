const React = require('react');
const style = require('styled-components').default;
const { css } = require('styled-components');
const Container = require('../lib/container.jsx');

const hide = (props) => {
  let styling = '';
  if (props.hide) {
    styling += css`opacity: 0;`;
  }
  if (!props.hide) {
    styling += css`opacity: 1;`;
  }
  return styling;
};

const ButtonContainer = style(Container)`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: #fff;
  border: 1px solid #d9d8db;
  padding: 5px;
  border-radius: 0 0 8px 8px;
  transition: opacity .3s ease-out;
  box-sizing: border-box;
  ${hide}`;

const Button = style.button`
  color: #7f187f;
  text-decoration: underline;
  appearance: none;
  display: inline-block;
  transition-duration: .25s;
  transition-timing-function: cubic-bezier(.65,.05,.36,1);
  transition-property: background-color,transform,color,border-color;
  outline: none;
  border-radius: 0;
  font-size: 16px;
  font-weight: 400;
  background: 0;
  cursor: pointer;
  border: 0;
  margin: 0;
  padding: 0;
  align-items: center;
  height: 21px;
  &:hover {
    text-decoration: none;
  }`;

const QuickviewButton = ({ name, handleClick }) => {
  const [hidden, hideButton] = React.useState(true);
  return (
    <ButtonContainer
      hide={hidden}
      onMouseEnter={(e) => hideButton(false)}
      onMouseLeave={(e) => hideButton(true)}
    >
      <Button onClick={handleClick}>{name}</Button>
    </ButtonContainer>
  );
};

module.exports = QuickviewButton;
