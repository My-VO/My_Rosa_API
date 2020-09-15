const { Items, PicturesItem } = require("../models");

const NotFoundError = require("../helpers/errors/not_found_error");

const itemsController = {
  getItems: async () => {
    const items = await Items.findAll({
      attributes: [
        "itemId",
        "name",
        "pricePot",
        "stockQuantityPot",
        "variety",
        "perfume",
        "size",
        "color",
      ],
      include: [
        {
          model: PicturesItem,
          attributes: ["picture"],
        },
      ],
    });

    return items;
  },

  getItemsByColor: async (color) => {
    return Items.findAll({
      attributes: [
        "itemId",
        "name",
        "pricePot",
        "stockQuantityPot",
        "variety",
        "perfume",
        "size",
        "color",
      ],
      where: {
        color,
      },
      include: [
        {
          model: PicturesItem,
          attributes: ["picture"],
        },
      ],
      order: [["itemId", "ASC"]],
    });
  },

  getItemsByVariety: async (variety) => {
    return Items.findAll({
      attributes: [
        "itemId",
        "name",
        "pricePot",
        "stockQuantityPot",
        "variety",
        "perfume",
        "size",
        "color",
      ],
      where: {
        variety,
      },
      include: [
        {
          model: PicturesItem,
          attributes: ["picture"],
        },
      ],
      order: [["itemId", "ASC"]],
    });
  },

  getItemsByColorNVariety: async (request) => {
    const { color, variety } = request;

    return Items.findAll({
      attributes: [
        "itemId",
        "name",
        "pricePot",
        "stockQuantityPot",
        "variety",
        "perfume",
        "size",
        "color",
      ],
      where: {
        color,
        variety,
      },
      include: [
        {
          model: PicturesItem,
          attributes: ["picture"],
        },
      ],
      order: [["itemId", "ASC"]],
    });
  },

  getItem: async (itemId) => {
    const item = await Items.findByPk(itemId, {
      attributes: [
        "itemId",
        "name",
        "pricePot",
        "stockQuantityPot",
        "priceRoot",
        "stockQuantityRoot",
        "variety",
        "perfume",
        "size",
        "color",
        "description",
        "plantationCare",
        "idealFor",
      ],
      include: [
        {
          model: PicturesItem,
          attributes: ["picture"],
        },
      ],
    });

    if (item == null) {
      throw new NotFoundError(
        "Not found item",
        "La ressource demandée n'existe pas"
      );
    }

    return item;
  },
};

module.exports = itemsController;
