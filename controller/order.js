const Order = require('../models/order')

const OrderController = {
  allOrders: async (req, res) => {
    const orders = await Order.find({})
    res.json(orders)
  },
  findOrder: async (req, res) => {
    try {
      const orderNumber = req.body.orderNumber
      const foundOrder = await Order.find({ order: orderNumber })
      res.status(200).json(foundOrder)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

module.exports = OrderController
