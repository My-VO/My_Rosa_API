require("dotenv").config();

const jwt = require("jsonwebtoken");

const UnauthorrizedError = require("../helpers/errors/unauthorized_error");
const ForbiddenError = require("../helpers/errors/forbidden_error");

const accessTokenSecret = process.env.JWT_SIGN_SECRET;

module.exports = {
  generateToken: (userData) => {
    // eslint-disable-next-line no-console
    // console.log("userData : ", userData);
    return jwt.sign(
      {
        userId: userData.id,
      },
      accessTokenSecret
      /* {
        expiresIn: '24h',
      } */
    );
  },

  authenticateJWT: (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(" ")[1];

      if (token === "null") {
        throw new UnauthorrizedError(
          "Accès refusé",
          "Vous devez être connecté pour accéder à cette ressource"
        );
      }
      // eslint-disable-next-line consistent-return
      jwt.verify(token, accessTokenSecret, (error, user) => {
        if (error) {
          throw new ForbiddenError();
        }

        request.user = user;

        next();
      });
    } else {
      throw new UnauthorrizedError(
        "Accès refusé",
        "Vous devez être connecté pour accéder à cette ressource"
      );
    }
  },
};
