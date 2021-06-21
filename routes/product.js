const router = require('express').Router()
const HerbController = require('../controller/product')

router.get('/', HerbController.allHerbs)

module.exports = router
