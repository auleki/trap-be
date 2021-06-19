const OrderController = require('../controller/order')
const router = require('express').Router()

router.get('/', OrderController.allOrders)
router.get('/:orderNumber', OrderController.findOrder)
router.post('/', OrderController.createOrder)

module.exports = router
