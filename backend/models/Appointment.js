const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  phone: String,
  doctor: String,
  date: String,
  problem: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model(
  "Appointment",
  appointmentSchema
);