const express = require("express");

const authMid = require("../utils/jwt.utils");

const ordersController = require("../controllers/orders_controller");
const { CREATED } = require("../helpers/status_codes");

const ordersRouter = express.Router();

ordersRouter.post(
  "/orders",
  authMid.authenticateJWT,
  async (request, reponse) => {
    const { userId } = request.user;
    const data = request.body;

    const newOrder = await ordersController.addOrder(data, userId);

    reponse.status(CREATED);
    reponse.json(newOrder);
  }
);

module.exports = ordersRouter;
