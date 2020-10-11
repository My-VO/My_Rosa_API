const { Op } = require("sequelize");

const { Items, PicturesItem } = require("../models");

const NotFoundError = require("../helpers/errors/not_found_error");

const itemsController = {
  getItems: async () => {
    const items = await Items.findAll({
      attributes: [
        "itemId",
        "type",
        "name",
        "price",
        "stockQuantity",
        "variety",
        "perfume",
        "size",
        "color",
      ],
      where: { type: "En Conteneur de 4L/5L" },
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
        "type",
        "price",
        "stockQuantity",
        "variety",
        "perfume",
        "size",
        "color",
      ],
      where: {
        type: "En Conteneur de 4L/5L",
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

  getItem: async (name) => {
    const roseName = name.replace("+", " ");
    const item = await Items.findAll({
      attributes: [
        "itemId",
        "name",
        "type",
        "price",
        "stockQuantity",
        "variety",
        "perfume",
        "size",
        "color",
        "flowering",
        "description",
        "plantationCare",
        "idealFor",
      ],
      where: {
        name: roseName,
      },
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
