var createError = require("http-errors");
var express = require("express");
var path = require("path");
const db = require("./mongo");
var cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
var logger = require("morgan");
var cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

var usersRouter = require("./routes/User/users.router");
var paySlipRouter = require("./routes/payslip/paySlip.router");
var employeeRouter = require("./routes/employee/employee.router");
var salaryRouter = require("./routes/salary/salary.router");

var app = express();
dotenv.config();

// view engine setup
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "jade");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("build"));

app.use("/api/payslip", paySlipRouter);
app.use("/api/user", usersRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/salary", salaryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
