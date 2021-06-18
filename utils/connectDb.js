require('dotenv').config()
const mongoose = require('mongoose')

const connectToDb = async () => {
  const DB_URL = process.env.DB_URL
  const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
  mongoose.connect(DB_URL, mongooseOptions, err => {
    if (err) return console.error(err)
    console.log('Connected to DB')
  })
}

module.exports = connectToDb
