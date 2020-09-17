const router = require("express").Router();
const usersRoutes = require("./API_user");
const adminsRoutes = require("./API_admins");
const authenticationRoutes = require("./AUTH_user");

// Post routes
router.use("/user", usersRoutes);
router.use("/admin", adminsRoutes)
router.use("/auth", authenticationRoutes)

module.exports = router;
