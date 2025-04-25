const express = require("express");
const Router = express.Router();
const Patient = require("../models/Patients");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

Router.post(
  "/api/loginpatient",
  [
    body("email", "Incorrect email").isEmail(),
    body("password", "Password is required").notEmpty(),
  ],
  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const patient = await Patient.findOne({ email });
      if (!patient) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const isPasswordMatch = await bcrypt.compare(password, patient.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const payload = {
        patient: {
          // Changed from 'doctor' to 'patient'
          id: patient._id,
          name: patient.name,
          email: patient.email,
        },
      };
      // Provide a fallback value for JWT_SECRET if not set
      const secretKey = process.env.JWT_SECRET || "fallback_secret_key";

      jwt.sign(payload, secretKey, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          throw err;
        }
        res.cookie("token", token, { httpOnly: true, maxAge: 86400 }); // 24 hours expiration
        res.json({ success: true, token });
      });
    } catch (error) {
      console.error("Login failed:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
);

module.exports = Router;
