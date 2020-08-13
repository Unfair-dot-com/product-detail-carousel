// const React = require('react');
const style = require('styled-components').default;

const Image = style.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: auto;
  border: 0;`;

module.exports = Image;
