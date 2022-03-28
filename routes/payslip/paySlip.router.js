const express = require("express");
const Router = express.Router();
const Payslip = require("../payslip/paySlip.modal");
const db = require("../dataBase/employee.db");
const ObjectId = require("mongoose").Types.ObjectId;

Router.route("/pdf/:id")
  .post(async (req, res) => {
    req.body.Employee.EmployeeIdDb = req.params.id;
    const data = new Payslip({ ...req.body });
    console.log(data);
    const result = await db.AddOne(data);
    return res.json(result);
  })
  .put(async (req, res) => {
    console.log(req.body, "payslipid");
    const result = await db.FindOneAndUpdate(Payslip, req.body, req.params.id);
    return res.json(result);
  });

Router.route("/history").get(async (req, res) => {
  const result = await db.FindAll(Payslip);
  return res.json(result);
});
Router.route("/history/:id").get(async (req, res) => {
  const result = await db.FindAll(Payslip, {
    "Employee.EmployeeIdDb": ObjectId(req.params.id),
  });
  return res.json(result);
});
Router.route("/getone/:id").get(async (req, res) => {
  const result = await db.FindOneById(Payslip, req.params.id);
  return res.json(result);
});

Router.route("/search").post(async (req, res) => {
  console.log(req.body.param, "asdfa");
  const result = await db.FindBySearch(Payslip, req.body.param);
  console.log(result, "result of search");
  return res.json(result);
});

Router.route("/delete/:id").delete(async (req, res) => {
  const result = await db.DeleteById(Payslip, req.params.id);
  console.log(result, "delete");
  return res.json(result);
});
module.exports = Router;
