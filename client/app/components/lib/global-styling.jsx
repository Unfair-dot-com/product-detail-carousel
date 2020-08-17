const { createGlobalStyle } = require('styled-components');

const Global = createGlobalStyle`
  font-family: sofia,arial,sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #221924;
  line-height: 1.2;
  box-sizing: border-box;`;

module.exports = Global;
