const router = require('express').Router()
const CustomerController = require('../controller/customer')

router.get('/', CustomerController.allCustomers)
router.get('/:username', CustomerController.findCustomer)

module.exports = router
