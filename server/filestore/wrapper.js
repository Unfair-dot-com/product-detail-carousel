const fs = require('fs');
const aws = require('aws-sdk');
const config = require('../config/filestore');
const credentials = require('../config/api_keys');

const awsConfig = { ...config, credentials };
aws.config = new aws.Config(awsConfig);
const s3 = new aws.S3(config);

const Promisify = (func) => new Promise((resolve, reject) => {
  func((error, success) => {
    if (error) {
      reject(error);
      return;
    }
    resolve(success);
  });
});

const readLocalFile = (filePath) => Promisify((callback) => {
  fs.readFile(filePath, callback);
});

const writeRemoteFile = (params) => Promisify((callback) => {
  s3.putObject(params, callback);
});

const upload = (readPath, writePath) => readLocalFile(readPath)
  .then((file) => {
    const params = {
      Bucket: config.bucket,
      Key: writePath,
      Body: file,
    };
    return writeRemoteFile(params);
  });

const uploadMulti = (pathPairs) => {
  if (!Array.isArray(pathPairs)) {
    throw new Error('pathPairs should be an array.');
  }
  pathPairs.forEach((pathPair) => {
    if (!Array.isArray(pathPair) || pathPair.length !== 2) {
      throw new Error('pathPairs items should be arrays of length 2.');
    }
  });
  const uploads = [];
  pathPairs.forEach((pathPair) => {
    uploads.push(upload(...pathPair));
  });
  return Promise.all(uploads);
};

module.exports.upload = upload;
module.exports.uploadMulti = uploadMulti;
