// should contain all the "get routes" to view most user/class/session specific data
// and the create/delete routes for sessions as these will be user created
const router = require("express").Router();
const userController = require("../../controllers/userController");
const authenticatedUser = require("../../config/authenticatedUser.js");
const passport = require("../../config/passport");

// matches with "/api/user/"
router
  .route("/")
  .put(passport.authenticate("local"), function (req, res) {
    // console.log({user:req.user})
    let user = { ...req.user.dataValues, password: "youWish" }
    res.json(user)
    console.log("login successful!")
  })

router
  .route("/verifyUser")
  .get(authenticatedUser,function (req, res) {
    console.log("verifying user")
    // res.json(req.user)
    res.json(req.user)
  })

router
  .get('/logout', function (req, res) {
    console.log(req)
    console.log(res)
    req.logout();
    res.sendFile('/');
});
// Matches with "/api/user/:id"
router
  .route("/info/:id", authenticatedUser)
  .get(userController.findUser)
  .put(userController.update)
  


module.exports = router;
