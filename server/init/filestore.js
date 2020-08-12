const fs = require('../filestore');
const config = require('../config/init');

const uploadImages = () => {
  fs.removeFiles(config.remoteDir)
    .catch((error) => {
      if (error.code === 'MalformedXML') {
        console.log('Remote directory is already empty.');
        console.log('error.code:', error.code);
        console.log('error.region:', error.region);
        console.log('error.time:', error.time);
        console.log('error.requestId:', error.requestId);
        console.log('error.extendedRequestId:', error.extendedRequestId);
        console.log('error.cfId:', error.cfId);
        console.log('error.statusCode:', error.statusCode);
        console.log('error.retryable:', error.retryable);
        console.log('error.retryDelay:', error.retryDelay);
      } else {
        throw error;
      }
    })
    .then(() => fs.uploadFiles(config.localDir, config.remoteDir))
    .then(() => fs.listRemoteDir(config.remoteDir))
    .then((results) => {
      console.log('Images uploaded:', results);
    })
    .catch((error) => {
      console.log('Uploading images failed:', error);
    });
};

uploadImages();
