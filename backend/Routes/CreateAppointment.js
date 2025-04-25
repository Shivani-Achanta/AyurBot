const express = require("express");
const mongoose = require("mongoose"); // Add this line to import mongoose
const Router = express.Router();
const Appointment = require("../models/Appointments");
const Patient = require("../models/Patients");
const Doctor = require("../models/Doctor");

Router.post("/api/createappointment", async (req, res) => {
  try {
    console.log("Received request to create appointment:", req.body);

    const { doctorName, date, message, patientEmail, prakruthi } = req.body;

    // Find patient by email
    const patient = await Patient.findOne({ email: patientEmail });
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    // Find doctor by name
    const doctor = await Doctor.findOne({ name: doctorName });
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    // Create the appointment
    const appointment = new Appointment({
      patient: patient._id,
      doctor: doctor._id,
      date,
      message,
      prakruthi,
    });

    await appointment.save();

    res.json(appointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = Router;
