const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys =require("./keys")

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




passport.use(
  new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // to see the structure of the data in received response:
      console.log("Google account details:", profile);

      User.findOne({
          googleID: profile.id
        })
        .then(user => {
          if (user) {
            done(null, user);
            return;
          }

          User.create({
              googleID: profile.id
            })
            .then(newUser => {
              done(null, newUser);
            })
            .catch(err => done(err)); // closes User.create()
        })
        .catch(err => done(err)); // closes User.findOne()
    }
  )
);


passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
});
module.exports = passport;