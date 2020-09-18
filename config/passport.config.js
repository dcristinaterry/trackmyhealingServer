const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(new LocalStrategy(

  { usernameField: "userId", passwordField: "password"},
  function (email, password, done) {
    db.User.findOne({
      where: {
        email_address: email
      }
    }).then(function (dbUser) {
      if (!dbUser) {
        console.log("Incorrect email")
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      else if (!dbUser.validPassword(password)) {
        console.log("Incorrect password")
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

module.exports = passport;