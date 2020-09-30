const { request } = require("express");
const {
  Users,
  Orders,
  OrderItems,
  OrdersStatus,
  Status,
  Items,
  PicturesItem,
} = require("../models");

const confirmedItems = async (orderItems, orderId) => {
  const { items } = orderItems;

  return Promise.all(
    items.map(async (orderItem) => {
      const { itemId, quantityOrder } = orderItem;
      const newItem = await OrderItems.create({
        orderId,
        itemId,
        quantityOrder,
      });
      return newItem.dataValues;
    })
  );
};

const ordersController = {
  addOrder: async (data, userId) => {
    const newOrder = await Orders.create({
      userId,
    });

    await OrdersStatus.create({
      orderId: newOrder.dataValues.orderId,
      statusId: 1,
    });

    await confirmedItems(data, newOrder.dataValues.orderId);

    const confirmedOrder = Orders.findByPk(newOrder.orderId, {
      attributes: ["orderId", "userId"],
      include: [
        {
          model: Users,
          attributes: ["firstName", "lastName"],
        },
        {
          model: OrdersStatus,
          attibutes: ["statusId"],
          include: [{ model: Status, attributes: ["description"] }],
        },
        {
          model: OrderItems,
          attributes: ["itemId", "quantityOrder"],
          include: [
            {
              model: Items,
              attributes: ["name", "variety", "price", "type"],
              include: [
                {
                  model: PicturesItem,
                  attributes: ["picture"],
                },
              ],
            },
          ],
          order: [["itemId", "ASC"]],
        },
      ],
    });

    return confirmedOrder;
  },

  // eslint-disable-next-line no-shadow
  getOrders: async (request) => {
    const { userId } = request.user;

    const orderList = await Orders.findAll({
      attributes: ["orderId", "userId", "createdAt", "updatedAt"],
      where: {
        userId,
      },
      include: [
        {
          model: Users,
          attributes: ["firstName", "lastName"],
        },
        {
          model: OrdersStatus,
          attibutes: ["statusId"],
          include: [{ model: Status, attributes: ["description"] }],
        },
        {
          model: OrderItems,
          attributes: ["itemId", "quantityOrder"],
          include: [
            {
              model: Items,
              attributes: ["name", "variety", "price", "type"],
              include: [
                {
                  model: PicturesItem,
                  attributes: ["picture"],
                },
              ],
            },
          ],
          order: [["itemId", "ASC"]],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    return orderList;
  },
};

module.exports = ordersController;
