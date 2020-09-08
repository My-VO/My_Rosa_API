const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const bodyParser = require("body-parser");

const routes = require("./routes");

const { notFoundHandler, errorLogger, errorHandler } = require("./middlewares");

const server = express();

server.use(helmet());
server.use(logger("tiny"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use("/api", routes);

server.use(notFoundHandler);
server.use(errorLogger);
server.use(errorHandler);

module.exports = server;
