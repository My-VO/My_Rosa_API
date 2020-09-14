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
    console.log("data : ", data);

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
              attributes: ["name", "variety", "pricePot", "priceRoot"],
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
};

module.exports = ordersController;
