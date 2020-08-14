const React = require('react');
const style = require('styled-components').default;
const Container = require('../lib/container.jsx');
const ProductList = require('./product-list.jsx');
const Button = require('./button.jsx');

const OuterContainer = style(Container)`
  position: relative;
  overflow: hidden;`;

const InnerContainer = style(Container)`
  padding: 12px 4px;
  overflow: hidden;`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      cardWidth: 220,
      totalWidth: 1100,
      hideLeft: true,
      hideRight: false,
    };
    this.moveSlides = this.moveSlides.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.setState = this.setState.bind(this);
  }

  moveSlides(direction) {
    this.setState((prevState, props) => {
      let position = 0;
      let hideLeft = true;
      let hideRight = true;
      if (direction === 'next') {
        position = prevState.position - prevState.cardWidth;
      }
      if (direction === 'previous') {
        position = prevState.position + prevState.cardWidth;
      }
      if (position < 0) {
        hideLeft = false;
      }
      if ((prevState.totalWidth + position) > 0) {
        hideRight = false;
      }
      return { position, hideLeft, hideRight };
    });
  }

  nextSlide() {
    this.moveSlides('next');
  }

  previousSlide() {
    this.moveSlides('previous');
  }

  render() {
    const { products } = this.props;
    const { position, hideLeft, hideRight } = this.state;
    return (
      <OuterContainer>
        <Button side="left" title="Previous Slide" click={this.previousSlide} hide={hideLeft} />
        <InnerContainer>
          <ProductList products={products} position={position} />
        </InnerContainer>
        <Button side="right" title="Next Slide" click={this.nextSlide} hide={hideRight} />
      </OuterContainer>
    );
  }
}

module.exports = Carousel;
