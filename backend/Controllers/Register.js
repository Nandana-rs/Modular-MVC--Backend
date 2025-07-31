const RegisterModel = require("../Models/Register-M.js");
const bcrypt = require("bcrypt");
const messages = require("../Helpers/MessageHelper");
const validate = require("../Helpers/ValidationHelper");

exports.handleRegister = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;

  if (!validate.areFieldsFilled([name, email, password, confirm_password])) {
    return res.status(400).json({ message: messages.requiredFields });
  }

  if (!validate.isEmailValid(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (!validate.doPasswordsMatch(password, confirm_password)) {
    return res.status(400).json({ message: messages.passwordMismatch });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await RegisterModel.createUser({ name, email, password: hashedPassword });
    return res.status(201).json({ message: messages.registrationSuccess, userId: result.insertId });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: messages.registrationFailed, error });
  }
};
