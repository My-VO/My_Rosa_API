const picturesItem = require("../seeds/pictures_item");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Pictures_Item", picturesItem);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Pictures_Item", null, {});
  },
};
