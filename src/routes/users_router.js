const express = require('express');

const usersController = require('../controllers/users_controller');

const usersRouter = express.Router();

usersRouter.post('/signup', async (request, reponse) => {
  const data = request.body;
  const newUser = await usersController.addUser(data);

  reponse.status(201);
  reponse.json(newUser);
});

module.exports = usersRouter;
