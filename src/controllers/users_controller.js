const bcrypt = require("bcrypt");

const { Users } = require("../models");
const userTDO = require("../dto/user_dto");

const ConflictError = require("../helpers/errors/conflict_error");

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
    const newUser = await Users.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const newUserDTO = await userTDO.convert2DTO(newUser);
    return newUserDTO;
  },
};

module.exports = usersController;
