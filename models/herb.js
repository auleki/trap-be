const mongoose = require('mongoose')
const { Schema } = mongoose

const herbSchema = new Schema({
  specie: {
    type: String,
    required: true,
    unique: true
  },
  herbType: {
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

module.exports = mongoose.model('herb', herbSchema)
