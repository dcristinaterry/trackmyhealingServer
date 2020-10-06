const path = require("path");
const router = require("express").Router();
const authRoutes = require("./api/auth.routes");

// API Routes
// router.use("/api", apiRoutes);

router.use('/api/auth', authRoutes)

// // If no API routes are hit, send the React app??
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});


module.exports = router;


