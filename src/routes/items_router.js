const express = require("express");

const { OK } = require("../helpers/status_codes");

const itemsController = require("../controllers/items_controller");

const itemsRouter = express.Router();

itemsRouter.get("/items", async (request, reponse) => {
  if (Object.keys(request.query).length !== 0) {
    const itemsFound = await itemsController.getItemsByElement(request);

    reponse.status(OK);
    reponse.json(itemsFound);
  } else {
    const items = await itemsController.getItems(request);

    reponse.status(OK);
    reponse.json(items);
  }
});

itemsRouter.get("/items/:itemId", async (request, reponse) => {
  const { itemId } = request.params;

  const item = await itemsController.getItem(itemId);

  reponse.status(OK);
  reponse.json(item);
});

module.exports = itemsRouter;
