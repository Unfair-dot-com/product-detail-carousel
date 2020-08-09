const faker = require('faker');
const products = require('./products');

const generateRandomProduct = (id) => ({
  _id: id,
  name: faker.commerce.productName(),
  description: faker.lorem.paragraph(3),
  image_url: faker.image.fashion(),
  brand: faker.company.companyName(),
  price: `$${(Math.random() * 200).toFixed(2)}`,
  review_score: 3 + Number.parseFloat((Math.random() * 2).toFixed(2)),
  review_count: Math.floor(Math.random() * 1000),
});

const generateRandomData = () => {
  const data = [];
  for (let i = 1; i < 100; i += 1) {
    data.push(generateRandomProduct(i));
  }
  products.drop().then(() => {
    console.log('Products collection dropped!');
    products.insert(data).then((results) => {
      console.log('Random data records in the db:', results.ops);
      console.log('Random data count in the db:', results.insertedCount);
      console.log('Random data ids in the db:', results.insertedIds);
      products.connection.then((connect) => {
        connect.client.close();
      });
    }).catch((error) => {
      console.log('Storing random data failed:', error);
      products.connection.then((connect) => {
        connect.client.close();
      });
    });
  });
};

generateRandomData();
