const React = require('react');
const PropTypes = require('prop-types');
const style = require('styled-components').default;
const Button = require('../lib/arrow-button.jsx');
const ProductList = require('./product-list.jsx');

const OuterContainer = style.div`
  position: relative;
  overflow: hidden;`;

const InnerContainer = style.div`
  padding: 12px 4px;
  overflow: hidden;
  box-sizing: border-box;`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      position: 0,
      hideLeft: true,
      hideRight: true,
      quickview: false,
    };
    this.innerContainer = React.createRef();
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.openQuickView = this.openQuickView.bind(this);
    this.closeQuickView = this.closeQuickView.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateDimensions(prevProps, prevState);
  }

  calculatePosition(currentIndex) {
    let index = currentIndex;
    const container = this.innerContainer.current;
    const list = container.firstChild;
    if (list === null || list.childNodes.length === 0) {
      return null;
    }
    const containerWidth = container.offsetWidth;
    // We do not want 8 hard codded here
    const cardWidth = list.childNodes[index].offsetWidth + 8;
    const totalWidth = list.childNodes.length * cardWidth;
    const limit = totalWidth - containerWidth;
    let position = -(index * cardWidth);
    const offset = limit + position;
    if (offset < 0) {
      position = -limit;
      index = Math.ceil(limit / cardWidth);
    }
    let hideLeft = true;
    let hideRight = true;
    if (position < 0) {
      hideLeft = false;
    }
    if (offset > 0) {
      hideRight = false;
    }
    return {
      index,
      position,
      hideLeft,
      hideRight,
    };
  }

  updateDimensions(prevProps, prevState) {
    const { state } = this;
    const newState = this.calculatePosition(state.index);
    const position = state.position !== newState.position;
    const hideLeft = state.hideLeft !== newState.hideLeft;
    const hideRight = state.hideRight !== newState.hideRight;
    const quickview = state.quickview !== prevState.quickview;
    const index = state.index !== prevState.index;
    if (position || hideLeft || hideRight || quickview || index) {
      this.setState(newState);
    }
  }

  nextSlide() {
    this.setState((prevState) => {
      const index = prevState.index + 1;
      return this.calculatePosition(index);
    });
  }

  previousSlide() {
    this.setState((prevState) => {
      const index = prevState.index - 1;
      return this.calculatePosition(index);
    });
  }

  openQuickView(index) {
    this.setState({ index, quickview: true });
  }

  closeQuickView(index) {
    this.setState({ index, quickview: false });
  }

  render() {
    const { products } = this.props;
    const {
      position,
      hideLeft,
      hideRight,
      quickview,
    } = this.state;
    return (
      <OuterContainer>
        <Button
          side="left"
          title="Previous Slide"
          click={this.previousSlide}
          hide={hideLeft}
        />
        <InnerContainer ref={this.innerContainer}>
          <ProductList
            products={products}
            position={position}
            quickview={quickview}
            open={this.openQuickView}
            close={this.closeQuickView}
          />
        </InnerContainer>
        <Button
          side="right"
          title="Next Slide"
          click={this.nextSlide}
          hide={hideRight}
        />
      </OuterContainer>
    );
  }
}

Carousel.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image_url: PropTypes.shape({
      small: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
      large: PropTypes.string.isRequired,
    }),
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    review_score: PropTypes.number.isRequired,
    review_count: PropTypes.number.isRequired,
  })).isRequired,
};

module.exports = Carousel;
