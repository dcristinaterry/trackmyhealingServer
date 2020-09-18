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
    console.log("login successful!")
  })

 authRoutes
  .route('/logout')
  .get((req, res) =>{
    console.log("user logged out")
    req.logout();
    res.send("User logged out")
    // res.sendFile('/');?????
});

authRoutes
  .route("/loggedin")
  .get(authenticatedUser,function (req, res) {
    console.log("verifying user")
    res.json(req.user)
  })
  
// authRoutes
// .route('/remove/:userid')
// .post(userController.remove);

module.exports = authRoutes;