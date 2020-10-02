const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;

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



passport.use(new GoogleStrategy({
  clientID: keys.GOOGLE.consumerKey,
  clientSecret: keys.GOOGLE.consumerSecret,
  callbackURL: "/api/auth/google/callback"
},
(token, tokenSecret, profile, done) =>{
  
  console.log(profile);
  //   db.User.findOne(
  //    {where:{
  //     googleId: profile.id
  //    }}

  //     )
  
  
  // db.User.Create({ googleId: profile.id }, function (err, user) {
  //     return done(err, user);
  //   });
  return done(null, profile);
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