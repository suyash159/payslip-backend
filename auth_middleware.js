const jwt_operations = require("./jwt_operations");
const db = require("./routes/dataBase/employee.db");
const User = require("./routes/User/users.modal");

const userExtractor = async (req, res, next) => {
  if (!req.headers.authorization) {
    return next(Error(401, "no authorization token"));
  }
  if (!req.headers.authorization.startsWith("Bearer")) {
    return res
      .status(401)
      .send(Error("Authorization token should be of bearer token"));
  }

  const token = req.headers.authorization.split(" ")[1];
  const id = jwt_operations.varifyToken(token);
  if (!id) {
    return res.status(401).send("Unauthorized request");
  }
  const user = await db.FindOneById(User, id.id);
  req.user = user;
  next();
};

module.exports = userExtractor;
