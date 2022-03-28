var express = require("express");
const { createToken } = require("../../jwt_operations");
var router = express.Router();
const User = require("../User/users.controller");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.route("/login").post(async (req, res) => {
  const result = await User.loginUser(req);
  return res.status(200).json(result);
});

module.exports = router;
