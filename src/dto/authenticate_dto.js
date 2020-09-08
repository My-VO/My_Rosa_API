const authenticateDTO = {
  convert2DTO: async (user) => {
    return {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
    };
  },
};

module.exports = authenticateDTO;
