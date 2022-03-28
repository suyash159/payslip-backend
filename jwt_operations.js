const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY);
  return token;
};
const varifyToken = (token) => {
  const id = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!id) {
    return res.status(401).send("Unauthorized request");
  }
  return id;
};
module.exports = {
  createToken,
  varifyToken,
};
