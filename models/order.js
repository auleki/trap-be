const mongoose = require('mongoose')
const { Schema } = mongoose

const OrderSchema = new Schema({
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
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  }
})

module.exports = mongoose.model('Order', OrderSchema)
