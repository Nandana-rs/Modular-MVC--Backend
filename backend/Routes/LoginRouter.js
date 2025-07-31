// Routes/LoginRouter.js
const express = require("express");
const router = express.Router();
const { handleLogin } = require("../Controllers/Login");

router.post("/", handleLogin);

module.exports = router;
