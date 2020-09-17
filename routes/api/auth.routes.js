const express = require('express');
const passport = require("passport");
const bcrypt =require('bcryptjs')

const authRoutes = express.Router();
const userController = require("../../controllers/userController");

authRoutes
  .post("/signup", passport.authenticate("local"), function (req, res) {
    // console.log({user:req.user})
    let user = { ...req.user.dataValues, password: "youWish" }
    res.json(user)
    console.log("login successful!")
  })


// authRoutes
//   .post("/login",passport.authenticate('local'), function (req, res) {
//     console.log("authenticating user")
//     console.log({user:req.user})
//     let user = { ...req.user.dataValues, password: "youWish" }
//     res.json(user)
   
//   })

  module.exports = authRoutes;