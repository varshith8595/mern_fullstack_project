const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  return jwt.sign({ id }, "varshith", {
    expiresIn: "30d",
  });
};
module.exports = generateToken;
