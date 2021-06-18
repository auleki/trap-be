const mongoose = require('mongoose')
const { Schema } = mongoose

const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  state: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  purchases: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order'
    }
  ]
})

module.exports = mongoose.model('Customer', CustomerSchema)
