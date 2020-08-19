const React = require('react');
const PropTypes = require('prop-types');
const style = require('styled-components').default;
const { css } = require('styled-components');

const opacity = ({ hide }) => {
  let styling = '';
  if (hide) {
    styling += css`opacity: 0;`;
  }
  if (!hide) {
    styling += css`opacity: 1;`;
  }
  return styling;
};

const display = ({ removed }) => {
  let styling = '';
  if (removed) {
    styling += css`display: none;`;
  }
  return styling;
};

const Container = style.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background: #fff;
  border: 1px solid #d9d8db;
  padding: 5px;
  border-radius: 0 0 8px 8px;
  transition: opacity .3s ease-out;
  box-sizing: border-box;
  ${opacity}
  ${display}`;

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

const QuickviewButton = ({ title, click, removed }) => {
  const [hide, hideButton] = React.useState(true);
  return (
    <Container
      hide={hide}
      removed={removed}
      onMouseEnter={() => hideButton(false)}
      onMouseLeave={() => hideButton(true)}
    >
      <Button onClick={click}>{title}</Button>
    </Container>
  );
};

QuickviewButton.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  removed: PropTypes.bool.isRequired,
};

module.exports = QuickviewButton;
