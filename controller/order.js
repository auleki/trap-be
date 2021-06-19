const Order = require('../models/order')

const OrderController = {
  allOrders: async (req, res) => {
    const orders = await Order.find({}).populate('buyer')
    res.json(orders)
    // res.json({ msg: 'ORDER PAGE HIT!' })
  },
  findOrder: async (req, res) => {
    try {
      const orderNumber = req.params.orderNumber
      const foundOrder = await Order.find({ order: orderNumber })
      res.status(200).json(foundOrder)
    } catch (error) {
      res.status(400).json(error)
    }
  },
  createOrder: async (req, res) => {
    try {
      const orderDetails = req.body
      const createdOrder = await new Order(orderDetails)
      const savedOrder = await createdOrder.save()
      console.log(savedOrder)
      res.status(200).json(savedOrder)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

module.exports = OrderController
