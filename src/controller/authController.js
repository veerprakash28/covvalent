const jwt = require("jsonwebtoken");
const { secret_key } = require("../middleware/auth");

const login = async (req, res, next) => {
  // Generating JWT Token
  const token = jwt.sign({ userId: user.id }, secret_key, { expiresIn: "1h" });
  res.status(200).json({
    message: "Login Successfull",
    token: token,
  });
};

module.exports = { login };
