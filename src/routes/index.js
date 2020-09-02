const express = require('express');

const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

module.exports = mainRouter;
