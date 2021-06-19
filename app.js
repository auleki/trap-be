require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectToDb = require('./utils/connectDb')
const morgan = require('morgan')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
// CONNECT TO MONGODB
connectToDb()

// IMPORT ROUTE HANDLERS
const customerRoutes = require('./routes/customer')
const adminRoutes = require('./routes/admin')
const orderRoutes = require('./routes/order')

app.use('/customers', customerRoutes)
app.use('/admin', adminRoutes)
app.use('/orders', orderRoutes)

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`SERVER UP @ http://localhost:${PORT}`))
