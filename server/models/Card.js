const mongoose = require('mongoose');

const Card = mongoose.model('Gorka', {
  adress: {
    latitude: {
      type: Number,
      require: true,
    },
    longitude: {
      type: Number,
      require: true,
    }
  },
  image: {
    type: String,
  },
  author: { type: mongoose.ObjectId, ref: 'User' },
  likes: [{ type: mongoose.ObjectId, ref: 'User' }]
});

module.exports = Card;
