const React = require('react');
const axios = require('axios');
const Global = require('./components/lib/global-styling.jsx');
const Carousel = require('./components/product-carousel/index.jsx');
const Description = require('./components/product-card/product-description.jsx');
const Card = require('./components/product-card/index.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productMock: {
        _id: 1,
        image_url: 'https://picsum.photos/300/200',
        name: 'Product Name',
        brand: 'Product Brand',
        price: '$9.99',
        review_score: 4.78,
        review_count: 432,
        description: 'Product Description',
      },
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
    const productMock = products[0];
    this.setState((prevState, props) => ({ products, productMock }));
  }

  render() {
    const { products, productMock } = this.state;
    return (
      <div>
        <Global />
        <Card product={productMock} />
        {/* <Carousel products={products} /> */}
      </div>
    );
  }
}

module.exports = App;
