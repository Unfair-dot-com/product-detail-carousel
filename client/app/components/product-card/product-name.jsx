const React = require('react');
const PropTypes = require('prop-types');
const style = require('styled-components').default;

const NameContainer = style.div`
  margin-top: 8px;`;

const NameValue = style.h2`
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  font-size: 16px;
  font-weight: 400;
  color: #221924;
  line-height: 1.2;
  height: 2.4em;`;

const Name = ({ name }) => (
  <NameContainer>
    <NameValue>{name}</NameValue>
  </NameContainer>
);

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

module.exports = Name;
