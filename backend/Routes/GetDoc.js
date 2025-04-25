const express = require("express");
const Router = express.Router();
const Doctor = require("../models/Doctor"); // Assuming you have a Doctor model

// Route to fetch doctor details by ID
Router.post("/api/doctors/:id", async (req, res) => {
  const doctorId = req.params.id;

  try {
    // Fetch doctor details from the database by ID
    const doctor = await Doctor.findById(doctorId);

    // If doctor is not found, return a 404 response
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    // Set cache control headers to prevent caching
    res.setHeader("Cache-Control", "no-store");

    // Send the doctor details as a JSON response
    res.json(doctor);
    console.log("Doctor fetched successfully");
    console.log(doctor);
  } catch (error) {
    console.error("Error fetching doctor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = Router;
