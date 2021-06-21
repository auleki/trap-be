const mongoose = require('mongoose')
const { Schema } = mongoose

const OrderSchema = new Schema({
  products: {
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
    ref: 'Customer',
    required: true
  },
  orderNumber: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Order', OrderSchema)

// {
//   "herbs": [
//       {
//           "specie": "Gorilla Kicks",
//           "price": 4000,
//           "herbType": "Sativa",
//           "imageUrl": "Link to image",
//           "discount": 40
//       },
//       {
//           "specie": "Spider's Venom",
//           "price": 2000,
//           "herbType": "Indica",
//           "imageUrl": "Link to image",
//           "discount": 25
//       },
//       {
//           "specie": "Dragon Breath",
//           "price": 3000,
//           "herbType": "Sativa",
//           "imageUrl": "Link to image",
//           "discount": 30
//       },
//       {
//           "specie": "Forest Sky",
//           "price": 3000,
//           "herbType": "Indica",
//           "imageUrl": "Link to image",
//           "discount": 50
//       }
//   ],
//   "totalPrice": 7000,
//   "orderNumber": "XFQG91941LP",
//   "buyer": "60cdb699a606d2228d4f85f8"
// }
