const { Op } = require("sequelize");

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

  getItemsByElement: async (request) => {
    const { color, variety, perfume, size } = request.query;
    let sizeSplit;

    if (size) {
      sizeSplit = size.split("_");
    }

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
        [Op.and]: [
          color ? { color } : {},
          variety ? { variety } : {},
          perfume ? { perfume } : {},
          size
            ? {
                size: { [Op.between]: [sizeSplit[0], sizeSplit[1]] },
              }
            : {},
        ],
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
