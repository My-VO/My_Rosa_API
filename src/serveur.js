const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();

server.use(logger('tiny'));
server.use(bodyParser.json());

server.use('/api', routes);
server.use('/*', (request, reponse) => {
  reponse.status(404).json({
    error: 'Vous vous êtes trompé de route !',
  });
});

module.exports = server;
