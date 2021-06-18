const CustomerController = require('../controller/customer')
const router = require('express').Router()

router.get('/customers', CustomerController.allOrders)
module.exports = router
