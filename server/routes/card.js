const express = require('express');
const router = express.Router();

const Card = require('../models/Card');
const User = require('../models/User');

const multer = require('multer');
const path = require('path');

const appDir = path.dirname(require.main.filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appDir + '/public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, 'image-' + Date.now() + path.extname(file.originalname)
    )
  }
})
const upload = multer({ storage })


router.get('/', async (req, res) => {
  try {
    const cards = await Card.find().populate('author');
    res.json(cards)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/new', upload.single('filedata'), async (req, res) => {
  const userId = req.body.userId
  try {
    const user = await User.findById(userId)
    const card = await Card.create({ 
      adress: {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      }, 
      image: `/${req.file.filename}`, 
      author: req.user._id
    })
    card.save();
    res.send(card)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/like', async (req, res) => {
  const { cardId , userId } = req.body
  
  if (userId) {
    try {
      const card = await Card.findById(cardId).populate('author')
  
      if (card.likes.includes(userId) === false) {
        card.likes.push(userId)
        card.save()

        const cards = await Card.find();
        res.json(cards)
      } else {
        const valueIndex = card.likes.indexOf(userId)
        card.likes.splice(valueIndex, 1)
        card.save()
        const cards = await Card.find();
        res.json(cards)
      }
    } catch (error) {
      res.sendStatus(500)
    }
  } else {

  }
})

router.get('/favorite/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const allCards = await Card.find().populate('author')
    let favorite = [];
    allCards.map( (el) => {
      if (el.likes.includes(userId)) {
        favorite.push(el)
        return el
      }
    })

    res.json(favorite)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.get('/author/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const cards = await Card.find({ author: userId }).populate('author')
    res.json(cards)
  } catch (error) {
    res.sendStatus(500)
  }
})

module.exports = router;
