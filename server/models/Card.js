const mongoose = require('mongoose');

const Card = mongoose.model('Gorka', {
  adress: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  description: String,
  author: { type: mongoose.ObjectId, ref: 'User' },
  likes: [{ type: mongoose.ObjectId, ref: 'User' }]
});

module.exports = Card;
