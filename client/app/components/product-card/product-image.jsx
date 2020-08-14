const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const Img = require('../lib/image.jsx');

const Image = ({ product }) => {
  const OuterContainer = style(Container)`
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    margin: -8px -8px 0;
    padding: 8px;`;
  const InnerContainer = style(Container)`
    position: relative;
    padding-bottom: 100%;`;
  const srcset = `${product.image_url} 170w,
                  ${product.image_url} 250w,
                  ${product.image_url} 340w`;
  const sizes = `(min-width: 750px) 170px,
                (min-width: 470px) calc(22vw - 20px),
                calc(40vw - 22px)`;
  // sizes="(min-width: 750px) 170px,(min-width: 470px) calc(22vw - 20px),calc(40vw - 22px)"
  // srcset="https://secure.img1-fg.wfcdn.com/im/60713971/resize-h170-p1-w170%5Ecompr-r70/1091/109117115/Spadina+Tree+of+Life+Laser+Cut+Steel+Wall+Sign.jpg 170w,https://secure.img1-fg.wfcdn.com/im/09658439/resize-h250-p1-w250%5Ecompr-r70/1091/109117115/Spadina+Tree+of+Life+Laser+Cut+Steel+Wall+Sign.jpg 250w,https://secure.img1-fg.wfcdn.com/im/58356093/resize-h340-p1-w340%5Ecompr-r70/1091/109117115/Spadina+Tree+of+Life+Laser+Cut+Steel+Wall+Sign.jpg 340w"
  return (
    <OuterContainer>
      <InnerContainer>
        <Img src={product.image_url} alt={product.name} srcset={srcset} sizes={sizes} />
      </InnerContainer>
    </OuterContainer>
  );
};

module.exports = Image;
