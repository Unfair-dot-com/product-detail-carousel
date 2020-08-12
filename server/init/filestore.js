const fs = require('../filestore');
const config = require('../config/init');

const uploadImages = () => {
  fs.removeFiles(config.remoteDir)
    .catch((error) => {
      console.log('fs.removeFiles error:', error);
      if (error) {
        console.log('fs.removeFiles error:', error);
      }
      return error;
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
