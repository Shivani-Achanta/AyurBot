const express = require("express");
const Router = express.Router();
const Doctor = require("../models/Doctor");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

Router.post(
  "/api/logindoctor",
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
      const doctor = await Doctor.findOne({ email });
      if (!doctor) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      console.log("Password provided:", password);
      console.log("Password from DB:", doctor.password);

      // Compare the provided password with the hashed password from the database
      const isPasswordMatch = await bcrypt.compare(password, doctor.password);

      if (!isPasswordMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      const payload = {
        doctor: {
          id: doctor._id,
          name: doctor.name,
          email: doctor.email,
        },
      };

      // Provide a fallback value for JWT_SECRET if not set
      const secretKey = process.env.JWT_SECRET || "fallback_secret_key";

      jwt.sign(payload, secretKey, { expiresIn: "24h" }, (err, token) => {
        if (err) {
          throw err;
        }
        res.cookie("token", token, { httpOnly: true, maxAge: 86400 });
        res.json({ success: true, token });
      });
    } catch (error) {
      console.error("Login failed:", error.message);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  }
);

module.exports = Router;
