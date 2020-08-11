const db = require('../database');

beforeAll((done) => {
  db.drop().then(() => {
    done();
  }).catch((error) => {
    console.log('db.drop() error:', error.codeName);
    done();
  });
});

test('Should insert a new product record in the db', (done) => {
  const dataObject = {
    _id: '0',
    name: 'Product Name',
    description: 'Product Description',
    image_url: 'Image URL',
    brand: 'Product Brand',
    price: '$9.99',
    review_score: 4.88,
    review_count: 245,
  };
  const dataArray = [dataObject];
  db.insert(dataObject).then((results) => {
    expect(results.ops).toEqual(dataArray);
    done();
  });
});

test('Should find the new product record in the db', (done) => {
  const dataObject = {
    _id: '0',
    name: 'Product Name',
    description: 'Product Description',
    image_url: 'Image URL',
    brand: 'Product Brand',
    price: '$9.99',
    review_score: 4.88,
    review_count: 245,
  };
  const dataArray = [dataObject];
  db.find().then((results) => {
    expect(results).toEqual(dataArray);
    done();
  });
});

test('Should delete the products collection in the db', (done) => {
  db.drop().then(() => {
    db.find().then((results) => {
      expect(results).toEqual([]);
      done();
    });
  });
});

test('Should close the db connection', (done) => {
  db.connection.then((connect) => {
    connect.client.close();
    done();
  });
});