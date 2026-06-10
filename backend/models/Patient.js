const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
  room: String,
  doctor: String,
  disease: String,
  status: {
    type: String,
    enum: ["Admitted", "Discharged"],
    default: "Admitted"
  }
});

module.exports = mongoose.model("Patient", patientSchema);
