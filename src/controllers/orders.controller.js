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
      const { itemId, quantityOrder, price } = orderItem;

      const priceTotalItem = price * quantityOrder;
      const newItem = await OrderItems.create(
        {
          orderId,
          itemId,
          quantityOrder,
          priceTotalItem,
        },
        { transaction }
      );

      return newItem.dataValues;
    })
  );
};

const priceTotalOrder = async (orderItems) => {
  // eslint-disable-next-line no-shadow
  let priceTotalOrder = 0;
  orderItems.map(async (orderItem) => {
    const { quantityOrder, price } = orderItem;

    priceTotalOrder += price * quantityOrder;
  });
  return priceTotalOrder;
};

const ordersController = {
  // eslint-disable-next-line consistent-return
  addOrder: async (data, userId) => {
    let transaction;

    const priceTotal = await priceTotalOrder(data);

    try {
      // First, we start a transaction and save it into a variable
      // Tout d'abord, on crée une transaction et on la sauvegarde dans une variable
      transaction = await sequelize.transaction();

      // Then, we do some calls passing this transaction as an option:
      // Après, on fait des appels en passant cette variable comme une option:
      const newOrder = await Orders.create(
        {
          userId,
          priceTotal,
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
        attributes: ["orderId", "userId", "priceTotal"],
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
            attributes: ["itemId", "quantityOrder", "priceTotalItem"],
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

      // If the execution reaches this line, no errors were thrown.
      // We commit the transaction.
      // Si l'excution arrive à cette ligne, aucune erreur n'est levée.
      // On commit la transaction.
      await transaction.commit();

      return confirmedOrder;
    } catch (err) {
      // If the execution reaches this line, an error was thrown.
      // We rollback the transaction.
      // Si l'excution arrive à cette ligne, une erreur est levée.
      // On rollback la transaction.
      if (transaction) {
        await transaction.rollback();
      }
      // eslint-disable-next-line no-console
      console.log("Err : ", err);
    }
  },

  // eslint-disable-next-line no-shadow
  getOrders: async (request) => {
    const { userId } = request.user;

    const orderList = await Orders.findAll({
      attributes: ["orderId", "userId", "priceTotal", "createdAt", "updatedAt"],
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
          attributes: ["itemId", "quantityOrder", "priceTotalItem"],
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
