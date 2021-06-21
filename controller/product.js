const Product = require('../models/product')

const ProductController = {
  allHerbs: async (req, res) => {
    try {
      const products = await Product.find({})
      res.send(200, products)
    } catch (error) {
      res.send(400, error)
    }
  }
}

module.exports = ProductController
