const passport = require('./passport.config')
const session = require("express-session")
const cookieSession = require("cookie-session")
const keys = require("./keys")
// const Users = require('../models/Users')


module.exports = app => {
  // initializePassport(passport);
  app.use(cookieSession({
    maxAge: 24 * 6060 * 60 * 1000,
    keys: [keys.session.cookieKey]
  }))

  app.use(session({
    secret: [keys.session.cookieKey], resave: false, saveUninitialized: false,
    // // , store:sessionStore ,
    // cookie: { maxAge: 24 * 6060 * 60 * 1000 }
  }));
  app.use(passport.initialize());
  app.use(passport.session());
}