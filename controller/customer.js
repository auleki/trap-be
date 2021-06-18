const Customer = require('../models/customer')

const CustomerController = {
  allCustomers: async (req, res) => {
    try {
      const herbs = await Customer.find({})
      res.json(herbs)
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
  }
}

module.exports = CustomerController
