const connection = require('./connect');

const Promisify = (func) => new Promise((resolve, reject) => {
  func((error, success) => {
    if (error) {
      reject(error);
      return;
    }
    resolve(success);
  });
});

const collection = (name) => Promisify((callback) => {
  connection.then((connect) => {
    connect.database.collection(name, callback);
  });
});

const insert = (name, documents) => Promisify((callback) => {
  collection(name).then((dataset) => {
    dataset.insertMany(documents, callback);
  });
});

const find = (name, query = {}) => Promisify((callback) => {
  collection(name).then((dataset) => {
    dataset.find(query, { limit: 10 }).toArray(callback);
  });
});

const drop = (name) => Promisify((callback) => {
  collection(name).then((dataset) => {
    dataset.drop(callback);
  });
});

module.exports.insert = insert;
module.exports.find = find;
module.exports.drop = drop;
module.exports.connection = connection;
