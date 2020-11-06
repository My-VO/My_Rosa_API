const express = require("express");

const authMid = require("../utils/jwt.utils");

const ordersController = require("../controllers/orders.controller");
const { CREATED, OK } = require("../helpers/status_codes");
const BadRequestError = require("../helpers/errors/bad_request_error");

const ordersRouter = express.Router();

ordersRouter.post(
  "/orders",
  authMid.authenticateJWT,
  async (request, response) => {
    const { userId } = request.user;
    const data = request.body;

    for (let i = 0; i < data.length; i++) {
      const { itemId, quantityOrder } = data[i];

      if (itemId == null || typeof itemId !== "number") {
        throw new BadRequestError(
          "Requête incorrecte",
          "Le champ item_id n'est pas renseigné"
        );
      }

      if (quantityOrder == null || typeof quantityOrder !== "number") {
        throw new BadRequestError(
          "Requête incorrecte",
          "Le champ quantity_order n'est pas renseigné"
        );
      }
    }

    const newOrder = await ordersController.addOrder(data, userId);

    response.status(CREATED);
    response.json(newOrder);
  }
);

ordersRouter.get(
  "/orders",
  authMid.authenticateJWT,
  async (request, response) => {
    const ordersFound = await ordersController.getOrders(request);

    response.status(OK);
    response.json(ordersFound);
  }
);

module.exports = ordersRouter;
