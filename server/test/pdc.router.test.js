test('GET method should succeed.', (done) => {
  jest.setMock('../database', {
    find: () => new Promise((resolve, reject) => {
      resolve('Mock resolve');
    }),
  });
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
  const req = {
    body: 'mock body',
    params: 'mock params',
  };
  const res = {
    status: (data) => {
      expect(data).toEqual(200);
    },
    json: (data) => {
      expect(data).toEqual('Mock resolve');
    },
    end: () => {
      jest.resetModules();
      done();
    },
  };
  const pdc = require('../router/pdc');
  pdc.get(req, res);
});

test('GET method should fail.', (done) => {
  jest.setMock('../database', {
    find: () => new Promise((resolve, reject) => {
      reject('Mock reject');
    }),
  });
  const req = {
    body: 'mock body',
    params: 'mock params',
  };
  const res = {
    status: (data) => {
      expect(data).toEqual(500);
    },
    json: (data) => {
      expect(data).toEqual('Server error');
    },
    end: () => {
      jest.resetModules();
      done();
    },
  };
  const pdc = require('../router/pdc');
  pdc.get(req, res);
});
