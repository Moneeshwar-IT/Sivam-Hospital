const express = require("express");
const router = express.Router();

const Appointment =
require("../models/Appointment");

router.post("/", async (req, res) => {
  const appointment =
  await Appointment.create(req.body);

  res.json(appointment);
});

router.get("/", async (req, res) => {
  const filter = {};
  if (req.query.doctor) {
    filter.doctor = req.query.doctor;
  }

  const appointments =
  await Appointment.find(filter);

  res.json(appointments);
});

router.delete("/:id", async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: "Appointment deleted" });
});

module.exports = router;