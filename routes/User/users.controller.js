const User = require("../User/users.modal");
const db = require("../dataBase/employee.db");
const jwtOperation = require("../../jwt_operations");

const loginUser = async (req) => {
  const result = await db.FindOneByEmail(User, req.body.Email);
  if (!result) {
    return Error(401, "user not found");
  }
  const token = await jwtOperation.createToken(result._id);
  return { token, result };
};

module.exports = {
  loginUser,
};
