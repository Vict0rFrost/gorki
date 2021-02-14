const express = require('express');
const router = express.Router();

const Card = require('../models/Card');
const User = require('../models/User');

router.get('/card', async (req, res) => {
  const { adress, image, description } = req.body
  try {
    const cards = await Card.findMany({ adress })
    res.json(cards)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/new', async (req, res) => {
  const { adress, image, description } = req.body
  const userId = req.session.user
  try {
    const user = await User.findById(userId)
    const card = await Card.create({ adress, image, description, author: userId })
    res.send(card)
  } catch (error) {
    res.sendStatus(500)
  }
})

module.exports = router;
