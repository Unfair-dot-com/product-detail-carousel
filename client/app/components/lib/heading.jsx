// const React = require('react');
const style = require('styled-components').default;

const Heading = style.h2`
  display: block;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  color: #221924;
  line-height: 1.2;
  font-size: 16px;
  font-weight: 400;
  font-family: sofia,arial,sans-serif;`;

module.exports = Heading;
