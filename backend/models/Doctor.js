const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  doctorId: String,
  name: String,
  password: String,
  department: String
});

module.exports = mongoose.model(
  "Doctor",
  doctorSchema
);