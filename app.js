const express =require('express')
const app = express();
const cors = require('cors');


// configs
require('./config/middleware.config')(app);
require('./config/session.config')(app);

//Base URLS
const routes = require("./routes/index.routes");
app.use(routes);

//Connection to Database and Initializing server 
require('./config/sequelize.config')(app)
// const GoogleStrategy = require('passport-google-oauth').OAuthStrategy;
// const passport = require('passport')
// const authRoutes = express.Router();


// passport.use(new GoogleStrategy({
//     consumerKey: "833667121511-bfhhs616kln3bucu245btkd9l5qvr2c6.apps.googleusercontent.com",
//     consumerSecret: "-AWqWKtmKuZr1y-S-AL9aplz",
//     callbackURL: "/auth/google/callback"
//   },
//   function(token, tokenSecret, profile, done) {
    
//     console.log(profile);
//       // db.User.findOne(
//       //  {where:{
//       //   googleId: profile.id
//       //  }}   
//       //   )
    
    
//     db.User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return done(err, user);
//       });
//   }   
//   )
//   );

//   authRoutes
//   .route('/auth/google')
//   .get(passport.authenticate('google', {
//     scope:['https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/userinfo.profile']
//   }
//   ))
  
//   authRoutes
//   .get('/auth/google/callback', 
//     passport.authenticate('google', { failureRedirect: '/login' }),
//     function(req, res) {
//       res.redirect('/');
//     });





module.exports=app;