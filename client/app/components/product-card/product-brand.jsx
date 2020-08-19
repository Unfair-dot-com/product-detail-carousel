const React = require('react');
const PropTypes = require('prop-types');
const style = require('styled-components').default;

const BrandValue = style.p`
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
  color: #221924;
  line-height: 1.2;`;

const Brand = ({ brand }) => (
  <div>
    <BrandValue>{brand}</BrandValue>
  </div>
);

Brand.propTypes = {
  brand: PropTypes.string.isRequired,
};

module.exports = Brand;
