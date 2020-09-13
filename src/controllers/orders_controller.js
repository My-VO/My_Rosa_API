const { Orders, OrderItems, OrdersStatus } = require("../models");

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

    const newOrderStatus = await OrdersStatus.create({
      orderId: newOrder.dataValues.orderId,
      statusId: 1,
    });

    const valideOrderItems = await confirmedItems(
      data,
      newOrder.dataValues.orderId
    );

    return valideOrderItems;
  },
};

module.exports = ordersController;
