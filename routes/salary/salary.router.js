const express = require("express");
const Router = express.Router();
const salary = require("../salary/salary.modal");
const db = require("../dataBase/employee.db");
const ObjectId = require("mongoose").Types.ObjectId;

Router.route("/add")
  .post(async (req, res) => {
    const data = new salary({ ...req.body });
    const result = db.AddOne(data);
    return res.json(result);
  })
  .get(async (req, res) => {
    const result = await db.FindOneByQuery(salary, req.body.id);
    return res.json(result);
  })
  .put(async (req, res) => {
    const result = await db.FindOneAndUpdateByQuerry(salary, req.body, {
      EmployeeId: req.body.EmployeeId,
    });
    return res.json(result);
  });
Router.route("/add/:id").get(async (req, res) => {
  const result = await db.FindOneByQuery(salary, { EmployeeId: req.params.id });
  return res.json(result);
});
module.exports = Router;
