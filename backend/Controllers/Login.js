const LoginModel = require("../Models/Login-M");
const bcrypt = require("bcrypt");
const messages = require("../Helpers/MessageHelper");
const validate = require("../Helpers/ValidationHelper")


exports.handleLogin = async (req, res) => {
    const { email, password } = req.body;



    // 1. check required fields
     if (!validate.areFieldsFilled([email, password])) {
    return res.status(400).json({ message: messages.requiredFields });
  }

  try {
    // 2. Get user from DB
        const user = await LoginModel.findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: messages.invalidCredentials });
    }

    // 3.Compare Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: messages.invalidCredentials });
    }

    // 4. Sucesss messages

        return res.status(200).json({
      message: messages.loginSuccess,
      userId: user.id,
      name: user.name,
      email: user.email,
       role: user.role,
    });


  }catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Login failed", error });
  }


}