const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");

const router = express.Router();

router.post("/doctor-login", async(req,res)=>{

const { doctorId, password } = req.body;

const doctor = await Doctor.findOne({ doctorId });

if(!doctor){
 return res.status(400).json({
  message:"Doctor not found"
 });
}

const match = await bcrypt.compare(
 password,
 doctor.password
);

if(!match){
 return res.status(400).json({
  message:"Wrong Password"
 });
}

const token = jwt.sign(
 { id: doctor._id },
 process.env.JWT_SECRET,
 { expiresIn:"1d" }
);

res.json({ token });

});

module.exports = router;