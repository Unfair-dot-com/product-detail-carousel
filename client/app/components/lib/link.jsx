const style = require('styled-components').default;

const Link = style.a`
  text-decoration: underline;
  color: #7f187f;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }`;

module.exports = Link;
