const express = require('express');

const usersRouter = require('./users_router');

const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});
mainRouter.use(usersRouter);

module.exports = mainRouter;
