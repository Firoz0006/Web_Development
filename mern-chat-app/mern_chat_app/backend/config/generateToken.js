const jwt = require("jsonwebtoken");

JWT_SECRET="firoz"

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {//process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
