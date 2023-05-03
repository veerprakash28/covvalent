// const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const secret_key =
  "6f835ef82c0861246d9db6e98220a75897c50f71b1d82b0a0a32a2f2c3a3a227";

const authToken = expressJwt({
  secret: secret_key,
  algorithms: ["HS256"],
  getToken: (req) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return req.headers.authorization.split(" ")[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  },
});

module.exports = { authToken, secret_key };
