const debug = require('debug')('app');
const express = require('express');
const database = require('./database');
const router = require('./router');

async function start(port) {
  // initialize database
  await database.init();

  // initialize web server
  const app = express();
  app.use(database.middleware());
  app.use(express.json());
  app.use(router);
  app.listen(port, () => {
    debug(`CodingTest listening at http://localhost:${port}`);
  });
  return app;
}

module.exports = {
  start,
};
