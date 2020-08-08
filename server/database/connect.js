const Client = require('mongodb').MongoClient;
const config = require('../config/db');

const dbConnection = (url, dbName) => new Promise((resolve, reject) => {
  const connection = new Client(url, { useUnifiedTopology: true });
  connection.connect((error, client) => {
    if (error) {
      reject(error);
      return;
    }
    resolve(client.db(dbName));
  });
});

module.exports = dbConnection(config.url, config.name);
