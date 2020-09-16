
// should have access to ALL features to CRUD any element

const router = require("express").Router();
const userController = require("../../controllers/userController");
const authenticatedAdmin = require("../../config/authenticatedAdmin")

// Matches with "/api/users"
router
  .route("/user")
  // .get(userController.findAllUsers)
  // .post(userController.create)

router
  .route("/user/:id", authenticatedAdmin)  
  // .get(userController.findUser)
  .put(userController.update)
  .delete(userController.remove)



module.exports = router;
