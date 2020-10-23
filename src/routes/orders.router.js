const express = require("express");

const authMid = require("../utils/jwt.utils");

const ordersController = require("../controllers/orders.controller");
const { CREATED, OK } = require("../helpers/status_codes");
const BadRequestError = require("../helpers/errors/bad_request_error");

const ordersRouter = express.Router();

ordersRouter.post(
  "/orders",
  authMid.authenticateJWT,
  async (request, reponse) => {
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

    reponse.status(CREATED);
    reponse.json(newOrder);
  }
);

ordersRouter.get(
  "/orders",
  authMid.authenticateJWT,
  async (request, reponse) => {
    const ordersFound = await ordersController.getOrders(request);

    reponse.status(OK);
    reponse.json(ordersFound);
  }
);

module.exports = ordersRouter;
