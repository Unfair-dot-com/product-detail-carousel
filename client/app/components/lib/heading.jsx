// const React = require('react');
const styled = require('styled-components');

const Heading = styled.default.h2`
  display: block;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #221924;
  line-height: 1.2;
  font-size: 16px;
  font-weight: 400;
  font-family: sofia,arial,sans-serif;`;

module.exports = Heading;
