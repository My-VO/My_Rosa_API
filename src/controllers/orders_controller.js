const {
  Users,
  Orders,
  OrderItems,
  OrdersStatus,
  Status,
  Items,
  PicturesItem,
  sequelize,
} = require("../models");

const confirmedItems = async (orderItems, orderId, transaction) => {
  return Promise.all(
    orderItems.map(async (orderItem) => {
      const { itemId, quantityOrder } = orderItem;

      console.log("itemId : ", itemId);
      console.log("orderId : ", orderId);

      const newItem = await OrderItems.create(
        {
          orderId,
          itemId,
          quantityOrder,
        },
        { transaction }
      );

      return newItem.dataValues;
    })
  );
};

const ordersController = {
  addOrder: async (data, userId) => {
    let transaction;

    try {
      // start a new transaction
      transaction = await sequelize.transaction();

      const newOrder = await Orders.create(
        {
          userId,
        },
        { transaction }
      );

      await OrdersStatus.create(
        {
          orderId: newOrder.dataValues.orderId,
          statusId: 1,
        },
        { transaction }
      );

      await confirmedItems(data, newOrder.dataValues.orderId, transaction);

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

      // if we get here they ran successfully, so...
      await transaction.commit();

      return confirmedOrder;
    } catch (err) {
      // if we got an error and we created the transaction, roll it back
      if (transaction) {
        await transaction.rollback();
      }
      console.log("Err : ", err);
    }
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
