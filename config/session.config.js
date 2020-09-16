// const passport = require('passport')
const passport = require('./passport')
// require("./passport");
const session = require("express-session")
const cookieSession = require("cookie-session")
const keys = require("./keys")




module.exports = app =>{
    
    app.use(cookieSession({
        maxAge: 24 * 6060 * 60 * 1000,
        keys: [keys.session.cookieKey]
      }))

    app.use(session({
      secret: [keys.session.cookieKey], resave: true, saveUninitialized: true,
      // // , store:sessionStore ,
      // cookie: { maxAge: 24 * 6060 * 60 * 1000 }
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}