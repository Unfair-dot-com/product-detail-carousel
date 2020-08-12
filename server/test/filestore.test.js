const fs = require('../filestore');

const remoteDir = 'test';
const localDir = './images';
const images = ['test/image_0.jpg', 'test/image_1.jpg'];

beforeEach((done) => {
  fs.removeFiles(remoteDir)
    .then(() => {
      done();
    })
    .catch((error) => {
      console.log('fs.removeFiles error:', error);
      done();
    });
});

test('Should upload files from local images dir to remote test dir.', (done) => {
  fs.uploadFiles(localDir, remoteDir)
    .then(() => fs.listRemoteDir(remoteDir))
    .then((results) => {
      expect(results).toEqual(images);
      done();
    });
});

test('Should remove files from remote test dir.', (done) => {
  fs.uploadFiles(localDir, remoteDir)
    .then(() => fs.removeFiles(remoteDir))
    .then(() => fs.listRemoteDir(remoteDir))
    .then((results) => {
      expect(results).toEqual([]);
      done();
    });
});


test('Should list files in remote test dir.', (done) => {
  fs.uploadFiles(localDir, remoteDir)
    .then(() => fs.listRemoteDir(remoteDir))
    .then((results) => {
      expect(results).toEqual(images);
      done();
    });
});