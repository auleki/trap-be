const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = new Schema({
  herbs: {
    type: [],
    required: true
  },
  timeOfOrder: {
    type: Date,
    default: Date.now
  },
  totalPrice: {
    type: Number,
    required: true
  },
  customer: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('order', orderSchema)
