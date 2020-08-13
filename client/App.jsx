const React = require('react');
const axios = require('axios');

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
    const id = window.location.pathname.match(/\d+/)[0];
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
    return (
      <ul>
        {this.state.products.map((product) => (<li key={product._id}>{product.name}</li>))}
      </ul>
    );
  }
}

module.exports = App;
