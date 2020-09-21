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
  .get((req, res) =>{gi
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
  
// authRoutes
// .route('/remove/:userid')
// .post(userController.remove);

module.exports = authRoutes;