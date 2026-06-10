const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.post("/", async (req, res) => {
  const patient = await Patient.create(req.body);
  res.json(patient);
});

router.get("/", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

router.put("/:id", async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(patient);
});

router.delete("/:id", async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ message: "Patient deleted" });
});

module.exports = router;
