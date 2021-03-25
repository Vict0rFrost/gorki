const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcrypt");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

const authenticateUser = async (req, email, password, done) => {
  if (/signin/.test(req.path)) {
    const user = await User.findOne({ email });
    if (!user) return done(null, false);
    if (await bcrypt.compare(password, user.password)) return done(null, user);
    return done(null, false);
  }
  const { login } = req.body;
  const userFound = await User.findOne({ email });
  if (userFound) {
    return done(null, false);
  }
  if (login && email && password) {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ login, email, password: hashPassword });
    await newUser.save();
    return done(null, newUser);
  }
  return done(null, false);
};

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    authenticateUser
  )
);
