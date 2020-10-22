const { expect } = require("chai");
const sinon = require("sinon");
const bcrypt = require("bcrypt");

const db = require("../models");
const usersController = require("../controllers/users_controller");

const { Users } = db;
const { userTDO } = require("../dto");

describe("Controllers :: UsersController :: Integration", () => {
  describe("#addUser", () => {
    it.skip("it should return a new user DTO ", async () => {
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
    it("it should execute addUser method ", async () => {
      // Given
      const data = {};

      const hashedPasswordStub = sinon.stub(bcrypt, "hash");
      const createStub = sinon.stub(Users, "create");
      const createStubConvert2DTO = sinon.stub(userTDO, "convert2DTO");

      // When
      await usersController.addUser(data);

      // Then
      expect(hashedPasswordStub.calledOnce).to.be.true;
      expect(createStub.calledOnce).to.be.true;
      expect(createStubConvert2DTO.calledOnce).to.be.true;
    });
  });
});
