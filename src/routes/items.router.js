const express = require("express");

const { OK } = require("../helpers/status_codes");

const itemsController = require("../controllers/items.controller");

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

itemsRouter.get("/items/:name", async (request, reponse) => {
  const { name } = request.params;

  const item = await itemsController.getItem(name);

  reponse.status(OK);
  reponse.json(item);
});

module.exports = itemsRouter;
