const bcrypt = require("bcrypt");

const { Users } = require("../models");
const { userTDO } = require("../dto");

const ConflictError = require("../helpers/errors/conflict_error");
const UnauthorrizedError = require("../helpers/errors/unauthorized_error");

const usersController = {
  addUser: async (data) => {
    const { firstName, lastName, email, password } = data;

    const findEmail = await Users.findOne({
      attributes: ["email"],
      where: { email },
    });

    if (findEmail) {
      throw new ConflictError(
        "Conflit",
        "Un utilisateur utilisant cette adresse email est déjà enregistré"
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("hashedPassword : ", hashedPassword);
    console.log("firstName : ", firstName);
    console.log("lastName : ", lastName);
    console.log("email : ", email);

    const newUser = await Users.create({
      userId: "1",
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    console.log("newUser : ", newUser);

    const newUserDTO = await userTDO.convert2DTO(newUser);

    return newUserDTO;
  },

  authenticate: async (data) => {
    const { email, password } = data;

    const findUserByEmail = await Users.findOne({
      where: { email },
    });

    if (!findUserByEmail) {
      throw new UnauthorrizedError("Accès refusé", "Votre compte n'existe pas");
    }

    const checkPassword = await bcrypt.compare(
      password,
      findUserByEmail.dataValues.password
    );

    if (!checkPassword) {
      throw new UnauthorrizedError(
        "Accès refusé",
        "Votre mot de passe n'est pas correct"
      );
    }

    const findUserByEmailDTO = await userTDO.convert2DTO(findUserByEmail);

    return findUserByEmailDTO;
  },
};

module.exports = usersController;
