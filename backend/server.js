require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();   // ✅ MOVE HERE

const connectDB = require("./config/db");

connectDB();

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

app.use(
  "/api/appointments",
  require("./routes/appointmentRoutes")
);

app.use(
  "/api/doctors",
  require("./routes/doctorRoutes")
);

app.use(
  "/api/nurses",
  require("./routes/nurseRoutes")
);

app.use(
  "/api/patients",
  require("./routes/patientRoutes")
);

app.use(
  "/api/hospital-data",
  require("./routes/hospitalDataRoutes")
);

app.listen(
  process.env.PORT,
  () => console.log("Server Running")
);