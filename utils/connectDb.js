require('dotenv').config()
const mongoose = require('mongoose')

const connectToDb = async () => {
  const DB_URL = process.env.DB_URL
  const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  mongoose.connect(DB_URL, mongooseOptions, err => {
    if (err) {
      console.error(err)
      // res.send(401, 'Connection Error')
    }
    console.log('Connected to DB')
    // next()
  })
}

module.exports = connectToDb
