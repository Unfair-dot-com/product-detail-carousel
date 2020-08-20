const path = require('path');

module.exports = {
  remotePath: 'https://product-detail-carousel-images.s3-us-west-1.amazonaws.com/',
  startId: 0,
  endId: 99,
  localSmallDir: path.resolve('images', 'small'),
  localMediumDir: path.resolve('images', 'medium'),
  localLargeDir: path.resolve('images', 'large'),
  remoteSmallDir: 'small',
  remoteMediumDir: 'medium',
  remoteLargeDir: 'large',
};
