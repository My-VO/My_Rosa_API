const express = require("express");

const { OK } = require("../helpers/status_codes");

const itemsController = require("../controllers/items.controller");

const itemsRouter = express.Router();

itemsRouter.get("/items", async (request, response) => {
  if (Object.keys(request.query).length !== 0) {
    const itemsFound = await itemsController.getItemsByElement(request);

    response.status(OK);
    response.json(itemsFound);
  } else {
    const items = await itemsController.getItems(request);

    response.status(OK);
    response.json(items);
  }
});

itemsRouter.get("/items/:name", async (request, response) => {
  const { name } = request.params;

  const item = await itemsController.getItem(name);

  response.status(OK);
  response.json(item);
});

module.exports = itemsRouter;
