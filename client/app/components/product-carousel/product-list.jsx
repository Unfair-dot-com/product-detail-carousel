const React = require('react');
const style = require('styled-components').default;
const { css } = require('styled-components');
const Card = require('../product-card/index.jsx');

const left = ({ position }) => css`left: ${position || 0}px;`;

const UL = style.ul`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  transition-duration: .25s;
  transition-timing-function: cubic-bezier(.65,.05,.36,1);
  transition-property: background-color,transform,color,border-color,margin,left;
  ${left}`;

const LI = style.li`
  position: relative;
  display: list-item;
  flex: 0 0 40%;
  max-width: 220px;
  min-width: 172px;
  margin: 0 8px 0 0;
  padding: 0;
  background: #fff;
  border-radius: 8px;`;

const ProductList = ({ products, position }) => (
  <UL position={position}>
    {products.map((product) => (
      <LI key={product._id}>
        <Card product={product} />
      </LI>
    ))}
  </UL>
);

module.exports = ProductList;
