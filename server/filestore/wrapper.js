const fs = require('fs');
const aws = require('aws-sdk');
const path = require('path');
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

const listLocalDir = (dirPath) => Promisify((callback) => {
  fs.readdir(dirPath, callback);
});

const readLocalFile = (filePath) => Promisify((callback) => {
  fs.readFile(filePath, callback);
});

const writeRemoteFile = (params) => Promisify((callback) => {
  s3.putObject(params, callback);
});

const removeRemoteFiles = (params) => Promisify((callback) => {
  if (params.Delete.Objects.length > 0) {
    s3.deleteObjects(params, callback);
  } else {
    callback(null, []);
  }
});

const listRemoteFiles = (params) => Promisify((callback) => {
  s3.listObjectsV2(params, callback);
});

const listRemoteDir = (dirPath, limit = 1000) => {
  const params = {
    Bucket: config.bucket,
    Prefix: dirPath,
    MaxKeys: limit,
  };
  return listRemoteFiles(params).then((data) => {
    const files = data.Contents;
    return files.map((file) => file.Key);
  });
};

const upload = (readPath, writePath) => readLocalFile(readPath)
  .then((file) => {
    const params = {
      Bucket: config.bucket,
      Key: writePath,
      Body: file,
      ContentType: 'image/jpeg', // This value should not be static
    };
    return writeRemoteFile(params);
  });

const uploadMulti = (pathPairs) => {
  const uploads = [];
  pathPairs.forEach((pathPair) => {
    uploads.push(upload(...pathPair));
  });
  return Promise.all(uploads);
};

const removeMulti = (removePaths) => {
  const params = {
    Bucket: config.bucket,
    Delete: {
      Quiet: false,
      Objects: removePaths.map((removePath) => ({ Key: removePath })),
    },
  };
  return removeRemoteFiles(params);
};

const uploadFiles = (localDirPath, remoteDirPath) => listLocalDir(localDirPath)
  .then((localFileNames) => {
    const pathPairs = [];
    localFileNames.forEach((localFileName, index) => {
      const localFilePath = path.join(localDirPath, localFileName);
      const sufixIndex = localFileName.lastIndexOf('.');
      const sufix = localFileName.slice(sufixIndex);
      const remoteFileName = `image_${(index).toString()}${sufix}`;
      const remoteFilePath = `${remoteDirPath}/${remoteFileName}`;
      pathPairs.push([localFilePath, remoteFilePath]);
    });
    return uploadMulti(pathPairs);
  });

const removeFiles = (remoteDirPath) => listRemoteDir(remoteDirPath)
  .then((removePaths) => removeMulti(removePaths));

module.exports.uploadFiles = uploadFiles;
module.exports.removeFiles = removeFiles;
module.exports.listRemoteDir = listRemoteDir;
