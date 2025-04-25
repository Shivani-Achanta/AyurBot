const express = require("express");
const Router = express.Router();
const Doctor = require("../models/Doctor");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

Router.post(
  "/api/createdoctor",
  [
    body("email", "Incorrect email").isEmail(),
    body("password", "Password must be at least 5 characters long").isLength({
      min: 5,
    }),
    body("name", "Name is required").notEmpty(),
    body("specialization", "Specialization is required").notEmpty(),
  ],
  async (req, res) => {
    const { email, password, name, specialization } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const existingDoctor = await Doctor.findOne({ email });
      if (existingDoctor) {
        return res.status(400).json({ error: "This email already exists" });
      }
      // Save the password as entered by the user
      const doctorData = new Doctor({
        email,
        name,
        password, // Save the password as entered by the user
        specialization,
        profileImageUrl:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/c2494d7be5e1d190f3f6cc063ad671f41f2a1f559f5084e50db7fb219cd4ee06?apiKey=370ce3c2a20944c1b14e584940571da5&",
        location: req.body.location,
      });
      await doctorData.save();
      const payload = {
        doctor: {
          id: doctorData._id,
          name: doctorData.name,
          email: doctorData.email,
        },
      };
      // Provide a fallback value for JWT_SECRET if not set
      const secretKey = process.env.JWT_SECRET || "fallback_secret_key";

      jwt.sign(
        payload,
        secretKey, // Use the secret key or fallback value
        { expiresIn: "24h" },
        (err, token) => {
          if (err) {
            throw err;
          }
          res.cookie("token", token, { httpOnly: true, maxAge: 86400 }); // 24 hours expiration
          res.json({ success: true, token });
        }
      );
    } catch (error) {
      console.error("Doctor creation failed:", error.message);
      return res.status(500).json({ success: false, error: error.message });
    }
  }
);

module.exports = Router;
