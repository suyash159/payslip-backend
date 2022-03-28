const mongoose = require("mongoose");
const Schema = require("mongoose").Schema.Types.ObjectId;
const employeeSchema = require("../employee/employee.modal");

const salarySchema = mongoose.Schema({
  Basic: {
    type: Number,
    required: true,
  },
  HRA: {
    type: Number,
    required: true,
  },
  SpecialAllowance: {
    type: Number,
    required: true,
  },
  MedicalAllowance: {
    type: Number,
    required: true,
  },
  Conveyance: {
    type: Number,
    required: true,
  },
  EmployeeId: {
    type: mongoose.Types.ObjectId,
    ref: "employee",
  },
});

module.exports = mongoose.model("salary", salarySchema);
