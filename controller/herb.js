const Herb = require('../models/herb')

const HerbController = {
  allHerbs: async (req, res) => {
    try {
      const herbs = await Herb.find({})
      res.send(200, herbs)
    } catch (error) {
      res.send(400, error)
    }
  }
}

module.exports = HerbController
