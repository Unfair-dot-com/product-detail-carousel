const React = require('react');
const axios = require('axios');
const Carousel = require('./components/product-carousel.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.updateProducts = this.updateProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const path = '/api/pdc/';
    const idMatch = window.location.pathname.match(/\d+/);
    const [id] = idMatch || ['0'];
    const uri = `${path}${id}`;
    axios(uri)
      .then((response) => this.updateProducts(response.data))
      .catch((error) => {
        console.log('getProducts error:', error);
      });
  }

  updateProducts(products) {
    // console.log('updateProducts products:', products);
    this.setState((prevState, props) => ({ products }));
  }

  render() {
    const { products } = this.state;
    return (
      <Carousel products={products} />
    );
  }
}

module.exports = App;