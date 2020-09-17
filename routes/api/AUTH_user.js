const router = require("express").Router();
const authenticatedUser = require("../../config/authenticatedUser.js");
const passport = require("passport");
// const passport = require("../../config/passport.config.js");


router
  .route("/login")
  .post(passport.authenticate('local'), function (req, res) {
    console.log("authenticating user")
    console.log({user:req.user})
    // success
    // 
    let user = { ...req.user.dataValues, password: "youWish" }
    res.json(user)
    // res.send("hola")
   
  })

  module.exports = router;