const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  productType: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  discount: {
    type: Number
  }
})

module.exports = mongoose.model('Product', ProductSchema)
