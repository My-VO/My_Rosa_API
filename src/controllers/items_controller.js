const { Items, PicturesItem } = require("../models");

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

    return item;
  },
};

module.exports = itemsController;
