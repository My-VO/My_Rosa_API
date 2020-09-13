const status = require("../seeds/status");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Status", status);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Status", null, {});
  },
};
