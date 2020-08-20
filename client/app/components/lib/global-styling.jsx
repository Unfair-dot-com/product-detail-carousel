const { createGlobalStyle } = require('styled-components');

/**
 * Note regarding css @import and createGlobalStyle
 * https://styled-components.com/docs/faqs#note-regarding-css-import-and-createglobalstyle
 */
const Global = createGlobalStyle`
  #product-detail-carousel-app {
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #221924;
    line-height: 1.2;
    box-sizing: border-box;
  }`;

module.exports = Global;
