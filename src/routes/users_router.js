const express = require("express");
const validateEmail = require("email-validator");

const usersController = require("../controllers/users_controller");

const usersRouter = express.Router();

usersRouter.post("/signup", async (request, reponse) => {
  const { firstName, lastName, email } = request.body;

  if (firstName === null || firstName === undefined || firstName === "") {
    reponse.status(400);
    reponse.json({
      message: "Le champ first_name n'est pas renseigné",
    });
  }

  if (lastName === null || lastName === undefined || lastName === "") {
    reponse.status(400);
    reponse.json({
      message: "Le champ last_name n'est pas renseigné",
    });
  }

  if (typeof firstName !== "string") {
    reponse.status(400);
    reponse.json({
      message: "Le champ first_name doit être une chaîne de caractères",
    });
  }

  if (typeof lastName !== "string") {
    reponse.status(400);
    reponse.json({
      message: "Le champ last_name doit être une chaîne de caractères",
    });
  }

  if (!validateEmail.validate(email)) {
    reponse.status(400);
    reponse.json({
      message: "Le champ email doit être une adresse email",
    });
  }

  const data = request.body;
  const newUser = await usersController.addUser(data);

  reponse.status(201);
  reponse.json(newUser);
});

module.exports = usersRouter;
