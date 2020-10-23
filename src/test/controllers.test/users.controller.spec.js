const { expect } = require("chai");
const sinon = require("sinon");
const bcrypt = require("bcrypt");

const db = require("../../models");
const usersController = require("../../controllers/users.controller");

const { Users } = db;

describe("Controllers :: UsersController :: Integration", () => {
  describe("#addUser", () => {
    it.skip("should return a new user DTO ", async () => {
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
    it("should execute addUser method ", async () => {
      // Given
      const data = {
        userId: 2,
        firstName: "My",
        lastName: "Rosa",
        email: "myrosafr@com.fr",
      };

      const createReturnUser = {
        ...data,
      };

      const dataExpected = {
        id: 2,
        first_name: "My",
        last_name: "Rosa",
        email: "myrosafr@com.fr",
      };

      const expectedUser = {
        ...dataExpected,
      };

      const hashedPasswordStub = sinon.stub(bcrypt, "hash");
      const createStub = sinon.stub(Users, "create").returns(createReturnUser);

      // When
      const createdUser = await usersController.addUser(data);

      // Then
      expect(hashedPasswordStub.calledOnce).to.be.true;
      expect(createStub.calledOnce).to.be.true;
      expect(createdUser).to.deep.equal(expectedUser);
    });
  });

  describe("#authenticate", () => {
    it("should return the right object", async () => {
      // Given
      const data = {
        userId: 2,
        firstName: "My",
        lastName: "Rosa",
        email: "myrosafr@com.fr",
        dataValues: { password: "azertyazerty123" },
      };

      const findReturnUser = {
        ...data,
      };

      const dataExpected = {
        id: 2,
        first_name: "My",
        last_name: "Rosa",
        email: "myrosafr@com.fr",
      };

      const expectedAuthUser = {
        ...dataExpected,
      };

      const findUserByEmailStub = sinon
        .stub(Users, "findOne")
        .returns(findReturnUser);

      const checkPasswordStub = sinon.stub(bcrypt, "compare").returns(true);

      // When
      const authUser = await usersController.authenticate(data);

      // Then
      expect(findUserByEmailStub.calledOnce).to.be.true;
      expect(checkPasswordStub.calledOnce).to.be.true;
      expect(authUser).to.deep.equal(expectedAuthUser);
    });
  });
});
