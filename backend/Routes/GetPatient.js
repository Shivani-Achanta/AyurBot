const express = require("express");
const Router = express.Router();
const Patient = require("../models/Patients"); // Assuming you have a Doctor model

// Route to fetch doctor details by ID
Router.post("/api/patient/:id", async (req, res) => {
  const patientId = req.params.id;

  try {
    // Fetch doctor details from the database by ID
    const patient = await Patient.findById(patientId);

    // If doctor is not found, return a 404 response
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    // Set cache control headers to prevent caching
    res.setHeader("Cache-Control", "no-store");

    // Send the doctor details as a JSON response
    res.json(patient);
    console.log("Patient fetched successfully");
    console.log(patient);
  } catch (error) {
    console.error("Error fetching patient:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = Router;
