const express = require("express");
const router = express.Router();

const RegisterController = require("../Controllers/Register");

// router.post("/register", RegisterController.handleRegister);
router.post("/", RegisterController.handleRegister);

module.exports = router;
