const router = require('express').Router()
const CustomerController = require('../controller/customer')

router.get('/', CustomerController.allCustomers)
// router.get('/', (req, res) => res.send('HITTING CUSTOMER ROUTES'))
router.post('/', CustomerController.createCustomer)
router.get('/:username', CustomerController.findCustomer)

module.exports = router
