const React = require('react');
const style = require('styled-components').default;

const OuterContainer = style.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  margin: -8px -8px 0;
  padding: 8px;`;

const InnerContainer = style.div`
  position: relative;
  padding-bottom: 100%;`;

const Img = style.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: auto;
  border: 0;
  box-sizing: border-box;`;

const srcset = (product) => {
  const img = new URL(product.image_url);
  const medium = img.pathname;
  const small = medium.replace('medium', 'small');
  const large = medium.replace('medium', 'large');
  const images = `${img.origin}${small} 170w, ${img.origin}${medium} 250w, ${img.origin}${large} 340w`;
  return images;
};

const sizes = (product) => `(min-width: 750px) 170px, (min-width: 470px) calc(22vw - 20px), calc(40vw - 22px)`;

/**
 * sizes="(min-width: 750px) 170px,(min-width: 470px) calc(22vw - 20px),calc(40vw - 22px)"
 *
 *
 * srcset="
 * https://secure.img1-fg.wfcdn.com/im/60713971/resize-h170-p1-w170%5Ecompr-r70/1091/109117115/Spadina+Tree+of+Life+Laser+Cut+Steel+Wall+Sign.jpg 170w,
 * https://secure.img1-fg.wfcdn.com/im/09658439/resize-h250-p1-w250%5Ecompr-r70/1091/109117115/Spadina+Tree+of+Life+Laser+Cut+Steel+Wall+Sign.jpg 250w,
 * https://secure.img1-fg.wfcdn.com/im/58356093/resize-h340-p1-w340%5Ecompr-r70/1091/109117115/Spadina+Tree+of+Life+Laser+Cut+Steel+Wall+Sign.jpg 340w"
 * https://product-detail-carousel-images.s3-us-west-1.amazonaws.com/medium/image_44.jpg
 *
 */

const Image = ({ product }) => (
  <OuterContainer>
    <InnerContainer>
      <Img
        src={product.image_url}
        alt={product.name}
        sizes={sizes(product)}
        srcSet={srcset(product)}
      />
    </InnerContainer>
  </OuterContainer>
);

module.exports = Image;
