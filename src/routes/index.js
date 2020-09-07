const express = require("express");
require("express-async-errors");

const mainRouter = express.Router();
const usersRouter = require("./users_router");

mainRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});
mainRouter.use(usersRouter);

module.exports = mainRouter;
