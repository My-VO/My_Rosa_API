const express = require("express");
const validateEmail = require("email-validator");

const jwtUtils = require("../utils/jwt.utils");

const { OK, CREATED } = require("../helpers/status_codes");
const BadRequestError = require("../helpers/errors/bad_request_error");

const usersController = require("../controllers/users_controller");

const usersRouter = express.Router();

usersRouter.post("/signup", async (request, reponse) => {
  const { firstName, lastName, email } = request.body;

  if (firstName === null || firstName === undefined || firstName === "") {
    throw new BadRequestError(
      "Requête incorrecte",
      "Le champ first_name n'est pas renseigné"
    );
  }

  if (lastName === null || lastName === undefined || lastName === "") {
    throw new BadRequestError(
      "Requête incorrecte",
      "Le champ last_name n'est pas renseigné"
    );
  }

  if (typeof firstName !== "string") {
    throw new BadRequestError(
      "Requête incorrecte",
      "Le champ first_name doit être une chaîne de caractères"
    );
  }

  if (typeof lastName !== "string") {
    throw new BadRequestError(
      "Requête incorrecte",
      "Le champ last_name doit être une chaîne de caractères"
    );
  }

  if (!validateEmail.validate(email)) {
    throw new BadRequestError(
      "Requête incorrecte",
      "Le champ email doit être une adresse email"
    );
  }

  const data = request.body;

  const newUser = await usersController.addUser(data);

  reponse.status(CREATED);
  reponse.json(newUser);
});

usersRouter.post("/signin", async (request, reponse) => {
  const data = request.body;

  const user = await usersController.authenticate(data);

  reponse.status(OK);
  reponse.json({ token: jwtUtils.genToken(user), user });
});

module.exports = usersRouter;
