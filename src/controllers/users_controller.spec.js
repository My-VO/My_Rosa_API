const { expect } = require("chai");
const sinon = require("sinon");
const bcrypt = require("bcrypt");

const db = require("../models");
const usersController = require("./users_controller");

const { Users } = db;

describe("Controllers :: UsersController :: Integration", () => {
  describe("#addUser", () => {
    it.skip("it should return the right object", async () => {
      // Given
      const data = {
        firstName: "My",
        lastName: "Rosa",
        email: "myrosa@rosa.fr",
        password: "azertyazerty123",
      };

      // When
      const newUser = await usersController.addUser(data);

      // Then
      expect(newUser).to.have.property("first_name");
      expect(newUser.first_name).to.equal(data.firstName);
      expect(newUser).to.have.property("last_name");
      expect(newUser.last_name).to.equal(data.lastName);
      expect(newUser).to.have.property("email");
      expect(newUser.email).to.equal(data.email);
      expect(newUser).to.have.property("password");
    });
  });
});

describe("Controllers :: UsersController :: Unit", () => {
  describe("#addUser", () => {
    it("should execute hash password method", async () => {
      // Given
      const data = {
        userId: 2,
        firstName: "My",
        lastName: "Rosa",
        email: "myrosa@com.vn",
        password: "azertyazerty123",
      };

      const createStub = sinon.stub(bcrypt, "hash");

      // When
      await usersController.addUser(data);

      // Then
      expect(createStub.calledOnce).to.be.true;
    });

    it.skip("should execute create method", async () => {
      // Given
      const data = {
        userId: 3,
        firstName: "My",
        lastName: "Rosa",
        email: "myrosafr@com.fr",
        // password: "azertyazerty123",
      };

      const createStub = sinon.stub(Users, "create");

      // When
      await usersController.addUser(data);

      // Then
      expect(createStub.calledOnce).to.be.true;
    });
  });
});
