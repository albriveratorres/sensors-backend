const express = require('express');

const users = require('./users.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/users', users);
}

module.exports = routerApi;
