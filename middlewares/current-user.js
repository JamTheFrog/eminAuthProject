const keys = require("../keys/keys");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token + " I am token")
    const decodedToken = jwt.verify(token, keys.JWT_SECRET_KEY);
    console.log(decodedToken.role + " I am decoded token")
    req.currentUser = decodedToken;
  } catch (error) {}

  next();
};
