// jest.setMock('../config/database', {
//   url: process.env.MONGO_URL,
//   name: 'pdc-test',
// });

jest.mock('mongodb', () => {
  const memo = {
    url: undefined,
    db: undefined,
    collection: undefined,
    data: [],
  };

  const report = (name) => {
    const message = `Invoking ${name}, with the state:`;
    // console.log(message, memo);
    return message;
  };

  const toArray = (cb) => {
    report('toArray');
    cb(null, memo.data);
  };

  const find = () => {
    report('find');
    return { toArray };
  };

  const insertMany = (data, cb) => {
    memo.data = data;
    const result = {
      ops: data,
      insertedCount: data.length,
      insertedIds: data.map((item) => item._id),
    };
    report('insertMany');
    cb(null, result);
  };

  const drop = (cb) => {
    memo.data = [];
    report('drop');
    cb(null, true);
  };

  const collection = (name, cb) => {
    memo.collection = name;
    report('collection');
    cb(null, { drop, insertMany, find });
  };

  const db = (name) => {
    memo.db = name;
    report('db');
    return { collection };
  };

  const close = () => {
    report('close');
    return true;
  };

  const connect = (cb) => {
    report('connect');
    cb(null, { db, close });
  };

  const MongoClient = function(url) {
    memo.url = url;
    report('MongoClient');
    return { connect };
  };

  return { MongoClient };
});

const db = require('../database');

beforeEach((done) => {
  db.drop().then(() => {
    done();
  }).catch((error) => {
    console.log('db.drop() error:', error.codeName);
    done();
  });
});

afterAll((done) => {
  jest.resetModules();
  db.connection.then((connect) => {
    connect.client.close();
    done();
  }).catch((error) => {
    console.log('db.connection error:', error.codeName);
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

test('Should insert a new product record array in the db', (done) => {
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
  db.insert(dataArray).then((results) => {
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
  db.insert(dataObject).then(() => {
    db.find().then((results) => {
      expect(results).toEqual(dataArray);
      done();
    });
  });
});

test('Should delete the products collection in the db', (done) => {
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
  db.insert(dataObject).then(() => {
    db.drop().then(() => {
      db.find().then((results) => {
        expect(results).toEqual([]);
        done();
      });
    });
  });
});

test('Should close the db connection', (done) => {
  db.connection.then((connect) => {
    connect.client.close();
    done();
  });
});
