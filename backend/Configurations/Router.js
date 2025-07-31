

const express = require("express");
const router = express.Router();

// Import your route files manually
const RegisterRouter = require("../Routes/RegisterRouter");
const LoginRouter = require("../Routes/LoginRouter");
// Add more routers here as you create them

// Attach them with proper prefixes
router.use("/register", RegisterRouter);
router.use("/login", LoginRouter)
// router.use("/login", LoginRouter);
// For example: router.use("/dashboard", DashboardRouter);

module.exports = router;
