const express = require("express");
const Router = express.Router();
const Doctor = require("../models/Doctor"); // Assuming you have a Doctor model

// Route to fetch the list of doctors
Router.post("/api/fetchdoc", async (req, res) => {
  try {
    // Fetch all doctors from the database and select both id and name fields
    const doctors = await Doctor.find({}, "email name specialization");

    // Set cache control headers to prevent caching
    res.setHeader("Cache-Control", "no-store");

    // Send the list of doctors as a JSON response
    res.json(doctors);
    console.log("Doctors fetched successfully");
    console.log(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = Router;
