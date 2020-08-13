const React = require('react');
const style = require('styled-components').default;
const Card = require('../product-card/index.jsx');

const ProductList = ({ products }) => {
  const UL = style.ul`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;`;
  const LI = style.li`
    position: relative;
    display: list-item;
    flex: 0 0 40%;
    max-width: 220px;
    min-width: 172px;
    width: 40%;
    margin: 0 8px 0 0;
    padding: 0;
    background: #fff;
    border-radius: 8px;`;
  return (
    <UL>
      {products.map((product) => (
        <LI key={product._id}>
          <Card product={product} />
        </LI>
      ))}
    </UL>
  );
};

module.exports = ProductList;
