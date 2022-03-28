const mongoose = require("mongoose");
const Employee = require("../employee/employee.modal");

const AddOne = async (data) => {
  try {
    const result = await data.save();
    return result;
  } catch (error) {
    return error;
  }
};
const FindAll = async (data, query = {}) => {
  try {
    const result = await data.find(query);
    return result;
  } catch (error) {
    return error;
  }
};
const FindOneById = async (data, id) => {
  try {
    const result = await data.findById(id);
    return result;
  } catch (error) {
    return error;
  }
};
const FindOneByQuery = async (data, query) => {
  try {
    const result = await data.findOne(query);
    return result;
  } catch (error) {
    return error;
  }
};
const FindOneByEmail = async (data, Email) => {
  try {
    const result = await data.findOne({ Email });
    return result;
  } catch (error) {
    return error;
  }
};
const FindOneAndUpdate = async (data, body, id) => {
  try {
    const result = await data.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );
    return result;
  } catch (error) {
    return error;
  }
};
const FindOneAndUpdateByQuerry = async (data, body, query) => {
  try {
    const result = await data.findOneAndUpdate(
      query,
      { $set: { ...body } },
      { new: true }
    );
    return result;
  } catch (error) {
    return error;
  }
};
const DeleteById = async (data, id) => {
  try {
    const result = await data.findOneAndRemove({ _id: id });
    return result;
  } catch (error) {
    return error;
  }
};
const FindBySearch = async (data, param) => {
  try {
    const result = await data.find({
      Employee: {
        $or: [{ Name: { $regex: param } }, { Email: { $regex: param } }],
      },
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  AddOne,
  FindAll,
  FindOneById,
  FindOneAndUpdate,
  DeleteById,
  FindOneByEmail,
  FindOneByQuery,
  FindBySearch,
  FindOneAndUpdateByQuerry,
};
