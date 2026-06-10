const mongoose = require("mongoose");

const hospitalDataSchema = new mongoose.Schema({
  emergency: String,
  icu: String,
  ambulance: String,
  operation: String
});

module.exports = mongoose.model("HospitalData", hospitalDataSchema);
