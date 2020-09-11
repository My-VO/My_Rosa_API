const express = require("express");

const { OK } = require("../helpers/status_codes");

const itemsController = require("../controllers/items_controller");

const itemsRouter = express.Router();

itemsRouter.get("/items", async (request, reponse) => {
  const items = await itemsController.getItems(request);

  reponse.status(OK);
  reponse.json(items);
});

itemsRouter.get("/items/:itemId", async (request, reponse) => {
  const { itemId } = request.params;

  const item = await itemsController.getItem(itemId);

  reponse.status(OK);
  reponse.json(item);
});

module.exports = itemsRouter;
