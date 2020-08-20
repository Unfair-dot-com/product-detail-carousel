const faker = require('faker');
const db = require('../database');
const fs = require('../filestore');
const config = require('../config/init');

const generateRandomProduct = (id, images) => ({
  _id: id,
  name: faker.commerce.productName(),
  description: faker.lorem.paragraph(3),
  image_url: images[Math.floor(Math.random() * images.length)],
  brand: faker.company.companyName(),
  price: `$${(Math.random() * 200).toFixed(2)}`,
  review_score: 3 + Number.parseFloat((Math.random() * 2).toFixed(2)),
  review_count: Math.floor(Math.random() * 1000),
});

const generateRandomData = () => {
  fs.listRemoteDir(config.remoteSmallDir)
    .then((small) => (
      fs.listRemoteDir(config.remoteMediumDir)
        .then((medium) => (
          fs.listRemoteDir(config.remoteLargeDir)
            .then((large) => {
              const images = small.map((file, index) => (
                {
                  small: small[index] || '',
                  medium: medium[index] || '',
                  large: large[index] || '',
                }
              ));
              const data = [];
              for (let i = config.startId; i <= config.endId; i += 1) {
                data.push(generateRandomProduct(i, images));
              }
              db.drop()
                .catch((error) => {
                  if (error.codeName === 'NamespaceNotFound') {
                    console.log('Products collection doesn\'t exist.');
                    console.log('error.ok:', error.ok);
                    console.log('error.code:', error.code);
                    console.log('error.codeName:', error.codeName);
                  } else {
                    throw error;
                  }
                })
                .then(() => {
                  db.insert(data).then((results) => {
                    // console.log('Random data records:', results.ops);
                    console.log('Random data count in:', results.insertedCount);
                    console.log('Random data ids:', results.insertedIds);
                    db.connection.then((connect) => {
                      connect.client.close();
                    });
                  });
                });
            })
        ))
    ))
    .catch((error) => {
      console.log('Storing random data failed:', error);
      db.connection.then((connect) => {
        connect.client.close();
      });
    });
};

generateRandomData();
