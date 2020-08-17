const style = require('styled-components').default;

const Link = style.a`
  font-size: 16px;
  text-decoration: underline;
  color: #7f187f;
  font-family: sofia,arial,sans-serif;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    text-decoration: none;
  }`;

module.exports = Link;
