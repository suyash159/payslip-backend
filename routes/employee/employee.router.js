const express = require("express");
const employee = require("../dataBase/employee.db");
const router = express.Router();
const Employee = require("../employee/employee.modal");
const userExtractor = require("../../auth_middleware");

router.route("/add").post(userExtractor, async (req, res) => {
  const data = new Employee({ ...req.body });

  const result = await employee.AddOne(data);
  return res.json(result);
});
router.route("/getall").get(userExtractor, async (req, res) => {
  const result = await employee.FindAll(Employee);
  return res.json(result);
});
router
  .route("/getone/:id")
  .get(userExtractor, async (req, res) => {
    const id = req.params.id;
    const result = await employee.FindOneById(Employee, id);
    return res.json(result);
  })
  .put(userExtractor, async (req, res) => {
    const id = req.params.id;

    const result = await employee.FindOneAndUpdate(Employee, req.body, id);
    return res.json(result);
  });
router.route("/delete/:id").delete(userExtractor, async (req, res) => {
  const id = req.params.id;

  const result = await employee.DeleteById(Employee, id);
  return res.json(result);
});
module.exports = router;
