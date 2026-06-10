const express = require("express");
const router = express.Router();
const HospitalData = require("../models/HospitalData");

router.get("/", async (req, res) => {
  const data = await HospitalData.findOne();
  res.json(data || {});
});

router.post("/", async (req, res) => {
  let data = await HospitalData.findOne();
  if (data) {
    data = await HospitalData.findByIdAndUpdate(data._id, req.body, {
      new: true,
      runValidators: true
    });
  } else {
    data = await HospitalData.create(req.body);
  }
  res.json(data);
});

module.exports = router;
