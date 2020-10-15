const { expect } = require("chai");
const sinon = require("sinon");
const bcrypt = require("bcrypt");

const db = require("../models");
const usersController = require("./users_controller");

const { Users } = db;

describe("Controllers :: UsersController :: Integration", () => {
  describe("#addUser", () => {
    it("it should return the right object", async () => {
      // Given
      const data = {
        firstName: "My",
        lastName: "Rosa",
        email: "myrosa@com.fr",
        password: "azertyazerty123",
      };

      // When
      const newUser = await usersController.addUser(data);

      // Then
      expect(newUser).to.have.property(firstName);
      expect(newUser.firstName).to.equal(data.firstName);
      expect(newUser).to.have.property(lastName);
      expect(newUser.lastName).to.equal(data.lastName);
      expect(newUser).to.have.property(email);
      expect(newUser.email).to.equal(data.email);
      expect(newUser).to.have.property(password);
    });
  });
});

describe("Controllers :: UsersController :: Unit", () => {
  describe("#addUser", () => {
    it.skip("should execute hash password method", async () => {
      // Given
      const data = {
        firstName: "My",
        lastName: "Rosa",
        email: "myrosa@com.fr",
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
        firstName: "My",
        lastName: "Rosa",
        email: "myrosa@com.fr",
        password: "azertyazerty123",
      };

      const createStub = sinon.stub(Users, "create");

      // When
      await usersController.addUser(data);

      // Then
      expect(createStub.calledOnce).to.be.true;
    });
  });
});
