const router = require('express').Router()
const HerbController = require('../controller/herb')

router.get('/', HerbController.allHerbs)

module.exports = router
