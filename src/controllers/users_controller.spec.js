const { expect } = require("chai");
const sinon = require("sinon");
const bcrypt = require("bcrypt");

const db = require("../models");
const usersController = require("./users_controller");

const { Users } = db;
const { userTDO } = require("../dto");

describe("Controllers :: UsersController :: Integration", () => {
  describe("#addUser", () => {
    it("it should return the right object", async () => {
      // Given
      const data = {
        firstName: "My",
        lastName: "Rosa",
        email: "rosamy@rosa.fr",
        password: "azertyazerty123",
      };

      // When
      const newUserDTO = await usersController.addUser(data);

      // Then
      expect(newUserDTO).to.have.property("first_name");
      expect(newUserDTO.first_name).to.equal(data.firstName);
      expect(newUserDTO).to.have.property("last_name");
      expect(newUserDTO.last_name).to.equal(data.lastName);
      expect(newUserDTO).to.have.property("email");
      expect(newUserDTO.email).to.equal(data.email);
    });
  });
});

describe("Controllers :: UsersController :: Unit", () => {
  describe("#addUser", () => {
    it("should execute create method", async () => {
      // Given
      const data = {
        firstName: "My",
        lastName: "Rosa",
        email: "myrosa@com.fr",
        password: "azertyazerty123",
      };

      const createStub = sinon.stub(Users, "create");
      const createStubConvert2DTO = sinon.stub(userTDO, "convert2DTO");

      // When
      await usersController.addUser(data);

      // Then
      expect(createStub.calledOnce).to.be.true;
      expect(createStubConvert2DTO.calledOnce).to.be.true;
    });
  });
});
