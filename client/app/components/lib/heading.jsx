const style = require('styled-components').default;

const Heading = style.h2`
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-size: 16px;
  font-weight: 400;
  color: #221924;
  line-height: 1.2;`;

module.exports = Heading;
