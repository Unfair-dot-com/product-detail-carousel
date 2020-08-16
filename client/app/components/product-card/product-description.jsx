const React = require('react');
const style = require('styled-components').default;
const { css } = require('styled-components');
const Container = require('../lib/container.jsx');
const Link = require('../lib/link.jsx');
const CloseButton = require('./close-button.jsx');

const hide = (props) => {
  let styling = '';
  if (props.hide) {
    styling += css`display: none;`;
  }
  return styling;
};

const DescriptionOuterShell = style(Container)`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 16px 40px 16px 16px;
  ${hide}`;

const DescriptionInnerShell = style(Container)`
  position: relative;
  color: #615c65;
  overflow: hidden;
  margin-bottom: 24px;
  min-height: 180px;
  max-height: 230px;
  &:after {
    content: "";
    height: 50px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg,hsla(0,0%,100%,0),#fff);
    z-index: 1;
  };`;

const FullDetailsShell = style(Container)`
  display: inline-block;`;

const FullDetailsLink = style(Link)`
  line-height: 24px;
  height: 24px;
  display: inline-block;`;

const DescriptionText = style.p`
  display: -webkit-box;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  margin-top: 8px;`;

const Description = ({ product, hide }) => (
  <DescriptionOuterShell hide={hide}>
    <CloseButton />
    <DescriptionInnerShell>
      <DescriptionText>{product.description}</DescriptionText>
    </DescriptionInnerShell>
    <FullDetailsShell>
      <FullDetailsLink href={product._id}>
        See Full Details
      </FullDetailsLink>
    </FullDetailsShell>
  </DescriptionOuterShell>
);

module.exports = Description;
