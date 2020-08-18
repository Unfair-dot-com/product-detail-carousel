const React = require('react');
const axios = require('axios');
const config = require('./config/index.js');
const Global = require('./components/lib/global-styling.jsx');
const Carousel = require('./components/product-carousel/index.jsx');

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
    const path = config.api_path;
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
    this.setState(() => ({ products }));
  }

  render() {
    const { products } = this.state;
    return (
      <div id="product-detail-carousel-app">
        <Global />
        <Carousel products={products} />
      </div>
    );
  }
}

module.exports = App;
