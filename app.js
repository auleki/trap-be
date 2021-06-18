require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDb = require('./utils/connectDb')

app.use(express.json())
app.use(cors())

connectToDb()
// const DB_URL = process.env.DB_URL
// const mongooseOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }
// mongoose.connect(DB_URL, mongooseOptions, err => {
//   if (err) {
//     console.error(err)
//   }
//   console.log('Connected to DB')
// })

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`SERVER UP @ http://localhost:${PORT}`))
