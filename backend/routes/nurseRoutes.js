const express = require("express");
const router = express.Router();
const Nurse = require("../models/Nurse");
const verifyAdmin = require("../middleware/auth");
const { body, validationResult } =require("express-validator");
router.post(
 "/",
 verifyAdmin,
 [
   body("nurseId").notEmpty(),
   body("name").notEmpty(),
   body("ward").notEmpty()
 ],
 async(req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){

      return res.status(400).json({
        errors: errors.array()
      });

    }

    const nurse = await Nurse.create(req.body);
    res.json(nurse);
});

router.get("/", async (req,res)=>{
    const nurses = await Nurse.find();
    res.json(nurses);
});
router.delete(
    "/:id",
    verifyAdmin,
    async (req,res)=>{

        await Nurse.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:"Nurse deleted"
        });

    }
);
module.exports = router;