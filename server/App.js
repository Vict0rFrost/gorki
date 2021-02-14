require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const passport = require("passport");
// const authRouter = require("./routes/auth");
// const passportSetup = require("./config/passport");
const userRouter = require('./routes/user');
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const app = express();
const PORT = process.env.PORT ?? 3001;

mongoose.connect(process.env.ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("sessionName", "sid");
app.use(
  session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: "Gorki",
    name: app.get("sessionName"),
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

// app.use(passport.initialize());
// app.use(passport.session());

const checkUser = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("http://localhost:3000/signin");
  }
};

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("Server has been started on port: ", PORT);
});
