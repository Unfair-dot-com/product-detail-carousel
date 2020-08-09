const express = require('express');
const config = require('./config/server');
const router = require('./router');

const app = express();
app.use(router);
app.listen(config.PORT, () => {
  console.log(`Server is running and listening on port ${config.PORT}.`);
});
