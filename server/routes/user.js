const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/signin', async (req, res) => {
  const { userEmail } = req.body
  const { password } = req.body
  try {
    const user = await User.findOne({ email: userEmail })
    if (user.password === password) {
      res.json(user)
    }
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/signup', async (req, res) => {
  const { login, email, password } = req.body
  try {
    const user = await User.create({ login, email, password })
    res.send(user)
  } catch (error) {
    res.sendStatus(500)
  }
})

module.exports = router;
