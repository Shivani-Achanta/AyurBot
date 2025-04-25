const express = require("express");
const Router = express.Router();
const Appointment = require("../models/Appointments");
const Patient = require("../models/Patients");
const Doctor = require("../models/Doctor");

Router.post("/api/fetchappointments", async (req, res) => {
  try {
    console.log("Received request to fetch appointments:", req.body);

    const { patientEmail } = req.body;

    // Find patient by email
    const patient = await Patient.findOne({ email: patientEmail });
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    // Extract appointment IDs from the patient document
    const appointmentIds = patient.appointments;

    // Fetch appointments based on the IDs
    const appointments = await Appointment.find({
      _id: { $in: appointmentIds },
    });

    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

Router.post("/api/fetchdocappointments", async (req, res) => {
  try {
    console.log("Received request to fetch appointments:", req.body);

    const { doctorEmail } = req.body;

    // Find patient by email
    const doctor = await Doctor.findOne({ email: doctorEmail });
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    // Extract appointment IDs from the patient document
    const appointmentIds = doctor.appointments;

    // Fetch appointments based on the IDs
    const appointments = await Appointment.find({
      _id: { $in: appointmentIds },
    });

    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = Router;
