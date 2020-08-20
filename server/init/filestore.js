const fs = require('../filestore');
const config = require('../config/init');

const uploadImages = (localDir, remoteDir) => (
  fs.removeFiles(remoteDir)
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
    .then(() => fs.uploadFiles(localDir, remoteDir))
    .then(() => fs.listRemoteDir(remoteDir))
    .then((results) => {
      console.log('Images uploaded:', results);
    })
);

const uploadAllImages = () => (
  uploadImages(config.localSmallDir, config.remoteSmallDir)
    .then(() => uploadImages(config.localMediumDir, config.remoteMediumDir))
    .then(() => uploadImages(config.localLargeDir, config.remoteLargeDir))
    .catch((error) => {
      console.log('Uploading images failed:', error);
    })
);

uploadAllImages();
