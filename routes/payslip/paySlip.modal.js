const mongoose = require("mongoose");

const payslipSchema = new mongoose.Schema(
  {
    Employee: {
      EmployeeIdDb: {
        type: String,
        required: true,
      },
      Name: {
        type: String,
        required: true,
      },
      Email: {
        type: String,
        required: true,
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
    },
    Salary: {
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
    },
    Attandance: {
      TotalWorkingDays: {
        type: Number,
        required: true,
      },
      PresentDays: {
        type: Number,
        required: true,
      },
      CasualLeave: {
        type: Number,
        required: true,
      },
      EmergencyLeave: {
        type: Number,
        required: true,
      },
      LossOfPay: {
        type: Number,
        required: true,
      },
      SandwichLeave: {
        type: Number,
        required: true,
      },
    },
    Deductions: {
      ProfessionalTax: {
        type: Number,
        required: true,
      },
      ProvidentFund: {
        type: Number,
        required: true,
      },
      OtherDeduction: {
        type: Number,
        required: true,
      },
      LeaveWithoutPay: {
        type: Number,
        required: true,
      },
      AdvanceLoan: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("payslip", payslipSchema);
