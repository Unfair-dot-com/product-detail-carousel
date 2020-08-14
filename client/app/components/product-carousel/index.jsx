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
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  nextSlide() {
    console.log('nextSlide');
    this.setState((prevState, props) => (
      { position: prevState.position - prevState.cardWidth }
    ));
  }

  previousSlide() {
    console.log('previousSlide');
    this.setState((prevState, props) => (
      { position: prevState.position + prevState.cardWidth }
    ));
  }

  render() {
    const { products } = this.props;
    const { position } = this.state;
    return (
      <OuterContainer>
        <Button side="left" title="Previous Slide" click={this.previousSlide} />
        <InnerContainer>
          <ProductList products={products} position={position} />
        </InnerContainer>
        <Button side="right" title="Next Slide" click={this.nextSlide} />
      </OuterContainer>
    );
  }
}

module.exports = Carousel;
