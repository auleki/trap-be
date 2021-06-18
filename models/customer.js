const mongoose = require('mongoose')
const { Schema } = mongoose

const customerSchema = new Schema({
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
  purchases: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('customer', customerSchema)
