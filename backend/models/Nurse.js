const mongoose = require("mongoose");

const nurseSchema = new mongoose.Schema({
  nurseId: String,
  name: String,
  ward: String
});

module.exports = mongoose.model(
  "Nurse",
  nurseSchema
);