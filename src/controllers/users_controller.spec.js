const { expect } = require("chai");
const sinon = require("sinon");

const users = require("./users_controller");
const db = require("../models");
const usersController = require("./users_controller");

const { Users } = db;

describe("Controlles :: UsersController :: Unit", () => {
  describe("#addUser", () => {
    it("should execute create method", async () => {
      // Given
      const data = {
        userId: 12358,
        firstName: "My",
        lastName: "Rosa",
        email: "my@rosa.fr",
        password: "azertyazerty123",
      };

      // const createReturnObject = {
      //   id: 12358,
      //   firstName: "My",
      //   lastName: "Rosa",
      //   email: "my@rosa.com",
      //   password: "azertyazerty123",
      // };

      const createStub = sinon.stub(Users, "create");
      // .returns(createReturnObject);

      // When
      await usersController.addUser(data);

      // Then
      expect(createStub.calledOnce).to.be.true;
    });
  });
});
