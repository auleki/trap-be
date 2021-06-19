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
    type: String,
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

// {
//   "firstName": "James",
//   "lastName": "Cameron",
//   "username": "jcanon",
//   "username": "jcameron",
//   "state": "Lagos",
//   "phone": 08032549841,
// }
