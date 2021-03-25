const mongoose = require('mongoose');
var faker = require('faker');

const User = require('../models/User');
const Card = require('../models/Card');

mongoose.connect('mongodb://localhost:27017/Gorki', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const randomName = () => faker.name.findName();
const randomEmail = () => faker.internet.email();
const randomPassword = () => faker.internet.password();
const randomLatitude = () => faker.address.latitude();
const randomLongitude = () => faker.address.longitude();
const randomImage = () => faker.image.image();
const randomDescription = () => faker.commerce.productDescription();

async function seedUsers(num) {
  for (let i = 0; i < num; i += 1) {
    User.create({
      login: randomName(),
      email: randomEmail(),
      password: randomPassword(),
    });
  }
}

async function seedCards(num) {
  const users = await User.find();
  for (let i = 0; i < num; i += 1) {
    Card.create({
      adress: {
        latitude: randomLat(),
        longitude: randomLong() 
      },
      image: randomImage(),
      author: users[0].id,
    });
  }
}

function randomLat(minLat = 50, maxLat = 60) {
  let rand = minLat + Math.random() * (maxLat - minLat);
  return rand
}

function randomLong(min = 30, max = 40) {
  let rand = min + Math.random() * (max - min);
  return rand
}


const start = async () => {
  // await seedUsers(10);
  await seedCards(10);
};

const long = [55.57135741962033, 55.90226583939895]
const latit = [37.63229370117188 , 37.59384155273438]

start();
