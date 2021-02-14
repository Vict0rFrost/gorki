const mongoose = require('mongoose');

const User = mongoose.model('User', {
  login: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: {
    type: String,
    default: '/default-user.jpg',
  },
});

module.exports = User;
