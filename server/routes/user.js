const express = require('express');
const router = express.Router();
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

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    res.json(user)
  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/upload/:id', upload.single('filedata'), async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findByIdAndUpdate(id, { avatar: `/${req.file.filename}` }, { new: true })
    res.json(user);
  } catch (error) {
    console.log('Что то пошло не так, upload');
  }
})

module.exports = router;
