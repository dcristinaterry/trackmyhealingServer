const express = require('express');
const passport = require("passport");
const authRoutes = express.Router();
const authenticatedUser = require("../../config/authenticatedUser");
const userController = require("../../controllers/userController");

authRoutes
  .route("/register")
  .post(userController.create)

authRoutes
  .route("/login")
  .post(passport.authenticate("local"),(req, res)=> {
    let user = {...req.user.dataValues,password: "youWish"}
    res.json(user)
    console.log(`User ${user.email_address} is logged in!`)
  })

 authRoutes
  .route('/logout')
  .get((req, res) =>{
    const response=req.user? `User ${req.user.email_address} is logged out` :`No users in sessions`
    console.log(response)
    req.logout();
    res.send(response)
    // res.sendFile('/');?????
});

authRoutes
  .route("/loggedin")
  .get(authenticatedUser,function (req, res) {
    console.log(`User ${req.user.email_address} is already logged in`)
    res.json(req.user)
  })
  
<<<<<<< HEAD
// authRoutes
// .route('/remove/:userid')
// .post(userController.remove);
authRoutes
.route( "/google")
.get(passport.authenticate("google", {
    scope: [
      'profile','email'
      // "https://www.googleapis.com/auth/userinfo.profile",
      // "https://www.googleapis.com/auth/userinfo.email"
    ]
  }),()=>console.log("sale")
);

authRoutes
.route("/google/callback")
.get(passport.authenticate("google", {
    successRedirect: "/home",   
    failureRedirect: "/"        // here you would redirect to the login page using traditional login approach
  }),(req,res)=>console.log("exiting")
);

=======
authRoutes
.route('/google')
.get(passport.authenticate('google', {
  scope:['https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/userinfo.profile']
}
))

authRoutes
.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

  
authRoutes
.route('/remove/:userid')
.post(userController.remove);
>>>>>>> dfc754db3823bdf32b97021afa862da3ee8949fd

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });
module.exports = authRoutes;