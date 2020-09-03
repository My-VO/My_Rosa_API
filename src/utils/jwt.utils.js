const jwt = require('jsonwebtoken');

const accessTokenSecret = process.env.JWT_SIGN_SECRET;

module.exports = {
  genToken: (userData) => {
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

  authenticateJWT: (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
          console.log(err);
          return res.sendStatus(403);
        }

        req.user = user;

        next();
      });
    } else {
      res.status(401).json({
        error: 'Vous devez être connecté pour accéder à cette ressource',
      });
    }
  },
};
