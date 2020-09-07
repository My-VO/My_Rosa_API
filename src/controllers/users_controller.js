const bcrypt = require('bcrypt');

const { Users } = require('../models');
const userTDO = require('../dto/user_dto');

const usersController = {
  addUser: async (data) => {
    const { firstName, lastName, email, password } = data;
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
