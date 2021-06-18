const CustomerController = require('../controller/customer')
const router = require('express').Router()

// router.get('/customers', CustomerController.allOrders)
router.get('/customers', (req, res) => {
  res.send('HITTING ADMIN ROUTES')
})
// router.get()

module.exports = router
