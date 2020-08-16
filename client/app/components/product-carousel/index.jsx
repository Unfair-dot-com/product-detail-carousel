const React = require('react');
const style = require('styled-components').default;
const { css } = require('styled-components');
const Container = require('../lib/container.jsx');
const Button = require('./button.jsx');
const Card = require('../product-card/index.jsx');

const left = ({ position }) => css`left: ${position || 0}px;`;

const resize = ({ quickview }) => {
  let styling = '';
  if (quickview) {
    styling += css`min-width: 100%; width: 100%;`;
  }
  return styling;
};

const OuterContainer = style(Container)`
  position: relative;
  overflow: hidden;`;

const InnerContainer = style(Container)`
  padding: 12px 4px;
  overflow: hidden;`;

const ProductList = style.ul`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  transition: transform 250ms cubic-bezier(.53,.34,.51,.9);
  transition-property: all;
  ${left}`;

const ProductListItem = style.li`
  position: relative;
  display: list-item;
  flex: 0 0 40%;
  max-width: 220px;
  min-width: 172px;
  margin: 0 8px 0 0;
  padding: 0;
  background: #fff;
  border-radius: 8px;
  ${resize}`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracking: 0,
      position: 0,
      cardWidth: 0,
      totalWidth: 0,
      containerWidth: 0,
      hideLeft: true,
      hideRight: true,
      quickview: false,
    };
    this.productList = React.createRef();
    this.updatePosition = this.updatePosition.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.openQuickView = this.openQuickView.bind(this);
    this.closeQuickView = this.closeQuickView.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateDimensions(prevProps, prevState);
  }

  updateDimensions(prevProps, prevState) {
    const list = this.productList.current;
    const { cardWidth } = prevState;
    if (list === null || list.childNodes.length === 0) {
      return;
    }
    const containerWidth = list.offsetWidth;
    const newCardWidth = list.firstChild.offsetWidth + 8;
    const totalWidth = list.childNodes.length * newCardWidth;
    if (cardWidth !== newCardWidth) {
      this.setState(() => {
        const newState = {
          cardWidth: newCardWidth,
          totalWidth,
          containerWidth,
        };
        const temp = this.updatePosition({ ...prevState, ...newState });
        return { ...newState, ...temp };
      });
    }
  }

  updatePosition({ tracking, cardWidth, totalWidth, containerWidth }) {
    const ctx = this.state;
    const position = -(tracking * cardWidth);
    let hideLeft = true;
    let hideRight = true;
    if (position < 0) {
      hideLeft = false;
    }
    if (((totalWidth - containerWidth) + position) > 0) {
      hideRight = false;
    }
    return {
      tracking,
      position,
      hideLeft,
      hideRight,
    };
  }

  nextSlide() {
    this.setState((prevState) => {
      const tracking = prevState.tracking + 1;
      return this.updatePosition({ ...prevState, tracking });
    });
  }

  previousSlide() {
    this.setState((prevState) => {
      const tracking = prevState.tracking - 1;
      return this.updatePosition({ ...prevState, tracking });
    });
  }

  openQuickView(id) {
    this.setState((prevState) => {
      const tracking = Number.parseInt(id, 10);
      const newState = this.updatePosition({ ...prevState, tracking });
      return { ...newState, quickview: true };
    });
  }

  closeQuickView() {
    this.setState((prevState, props) => {
      const newState = this.updatePosition(prevState);
      return {
        ...newState,
        quickview: false,
        position: 0,
      };
    });
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
        <Button side="left" title="Previous Slide" click={this.previousSlide} hide={hideLeft} />
        <InnerContainer>
          <ProductList position={position} ref={this.productList}>
            {products.map((product) => (
              <ProductListItem key={product._id} quickview={quickview}>
                <Card
                  product={product}
                  quickview={quickview}
                  open={this.openQuickView}
                  close={this.closeQuickView}
                />
              </ProductListItem>
            ))}
          </ProductList>
        </InnerContainer>
        <Button side="right" title="Next Slide" click={this.nextSlide} hide={hideRight} />
      </OuterContainer>
    );
  }
}

module.exports = Carousel;
