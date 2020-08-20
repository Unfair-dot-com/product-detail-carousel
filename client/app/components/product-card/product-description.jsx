const React = require('react');
const PropTypes = require('prop-types');
const style = require('styled-components').default;
const { css } = require('styled-components');
const Link = require('../lib/link.jsx');
const CloseButton = require('../lib/close-button.jsx');

const display = ({ hide }) => {
  let styling = '';
  if (hide) {
    styling += css`display: none;`;
  }
  return styling;
};

const OuterContainer = style.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 16px 40px 16px 16px;
  ${display}`;

const InnerContainer = style.div`
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

const FullDetailsContainer = style.div`
  display: inline-block;`;

const FullDetailsLink = style(Link)`
  line-height: 24px;
  height: 24px;
  display: inline-block;`;

const DescriptionValue = style.p`
  display: -webkit-box;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  margin-top: 8px;`;

const Description = (props) => {
  const {
    url,
    description,
    hide,
    close,
    fullDetailsLinkTitle,
  } = props;
  return (
    <OuterContainer hide={hide}>
      <CloseButton click={close} title="Close" />
      <InnerContainer>
        <DescriptionValue>{description}</DescriptionValue>
      </InnerContainer>
      <FullDetailsContainer>
        <FullDetailsLink href={url}>{fullDetailsLinkTitle}</FullDetailsLink>
      </FullDetailsContainer>
    </OuterContainer>
  );
};

Description.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  fullDetailsLinkTitle: PropTypes.string.isRequired,
};

module.exports = Description;
