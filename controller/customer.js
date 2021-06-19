const Customer = require('../models/customer')

const CustomerController = {
  allCustomers: async (req, res) => {
    try {
      const customers = await Customer.find({})
      res.json(customers)
    } catch (error) {
      res.json(error)
    }
  },
  findCustomer: async (req, res) => {
    try {
      const customer = await Customer.find({ username: req.params.username })
      res.status(200).json(customer)
    } catch (error) {
      res.status(400).json(error)
    }
  },
  allOrders: async (req, res) => {
    try {
      const orders = await Customer.find({}).populate('purchases')
      res.status(200).json(orders)
    } catch (error) {
      res.json(error)
    }
  },
  createCustomer: async (req, res) => {
    try {
      const customerDetails = req.body.customer
      const createdCustomer = await new Customer(customerDetails)
      const savedCustomer = await createdCustomer.save()
      console.log(savedCustomer)
      res.status(200).json(savedCustomer)
      // res.status(200).json({ msg: 'Creating Customer Routes' })
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

module.exports = CustomerController
