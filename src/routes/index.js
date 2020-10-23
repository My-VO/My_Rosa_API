const express = require("express");
require("express-async-errors");

const mainRouter = express.Router();
const usersRouter = require("./users.router");
const itemsRouter = require("./items.router");
const ordersRouter = require("./orders.router");

const { OK } = require("../helpers/status_codes");

mainRouter.get("/", (request, reponse) => {
  reponse.status(OK);
  reponse.json({ message: "Hello World!" });
});
mainRouter.use(usersRouter);
mainRouter.use(itemsRouter);
mainRouter.use(ordersRouter);

module.exports = mainRouter;
