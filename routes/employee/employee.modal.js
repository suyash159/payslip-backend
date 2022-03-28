const mongoose = require("mongoose");
const Schema = require("mongoose").Schema.Types.ObjectId;
const salarySchema = require("../salary/salary.modal");

const employeeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  EmployeeId: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  ContactNo: {
    type: Number,
    required: true,
  },
  JoiningDate: {
    type: String,
    required: true,
  },
  SalaryId: {
    type: Schema,
    ref: "salary",
  },
});
module.exports = mongoose.model("employee", employeeSchema);
