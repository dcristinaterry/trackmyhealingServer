const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
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
  consumerKey: "833667121511-bfhhs616kln3bucu245btkd9l5qvr2c6.apps.googleusercontent.com",
  consumerSecret: "-AWqWKtmKuZr1y-S-AL9aplz",
  callbackURL: "/api/auth/google/callback"
},
function(token, tokenSecret, profile, done) {
  
  console.log(profile);
    // db.User.findOne(
    //  {where:{
    //   googleId: profile.id
    //  }}
      
      
    //   )
  
  
  db.User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
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