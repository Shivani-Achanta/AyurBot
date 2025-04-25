const express = require("express");
const Router = express.Router();
const Patient = require("../models/Patients");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

Router.post(
  "/api/createpatient",
  [
    body("email", "Incorrect email").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
    body("name", "Name is required").notEmpty(),
  ],
  async (req, res) => {
    try {
      // Validate request body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password, name, location } = req.body;

      // Check if patient with the same email already exists
      const existingPatient = await Patient.findOne({ email });
      if (existingPatient) {
        return res.status(400).json({ error: "This email already exists" });
      }

      // Create new patient instance
      const newPatient = new Patient({
        email,
        name,
        password, // Save the password as entered by the user
        location,
      });

      // Save the patient to the database
      await newPatient.save();

      // Include patient details in the JWT payload
      const payload = {
        patient: {
          id: newPatient._id,
          name: newPatient.name,
          email: newPatient.email,
        },
      };

      // Provide a fallback value for JWT_SECRET if not set
      const secretKey = process.env.JWT_SECRET || "fallback_secret_key";

      // Sign JWT token and send it in response
      jwt.sign(payload, secretKey, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          throw err;
        }
        res.cookie("token", token, { httpOnly: true, maxAge: 86400 }); // 24 hours expiration
        res.json({ success: true, token });
      });
    } catch (error) {
      console.error("Patient creation failed:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
);

module.exports = Router;
