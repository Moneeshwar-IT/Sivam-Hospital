const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");
const bcrypt = require("bcryptjs");
const { body } = require("express-validator");
const { validationResult } =require("express-validator");
const verifyAdmin = require("../middleware/auth");
router.post(
  "/",
  verifyAdmin,
  [
    body("doctorId").notEmpty(),
    body("name").notEmpty(),
    body("password").isLength({ min: 4 }),
    body("department").notEmpty()
  ],
  async (req,res)=>{

  const errors = validationResult(req);

  if(!errors.isEmpty()){

    return res.status(400).json({
      errors: errors.array()
    });

  }

  try{

    const {
      doctorId,
      name,
      password,
      department
    } = req.body;

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const doctor =
      await Doctor.create({
        doctorId,
        name,
        password: hashedPassword,
        department
      });

    res.status(201).json(doctor);

  }catch(error){

    console.error(error);

    res.status(500).json({
      message: "Server Error"
    });

  }

}
);

router.get("/", async(req,res)=>{
  const doctors =
    await Doctor.find();

  res.json(doctors);
});
router.delete(
    "/:id",
    verifyAdmin,
    async (req,res)=>{

        await Doctor.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:"Doctor deleted"
        });

    }
);
module.exports = router;