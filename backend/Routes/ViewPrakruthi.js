const express = require("express");
const Router = express.Router();
const Prakruthi = require("../models/Output");

// POST endpoint to retrieve predicted Prakriti based on patient's email in the request body
Router.post("/api/viewprakruthi", async (req, res) => {
  try {
    const { email } = req.body; // Extract email from request body

    // Find predicted Prakriti based on email
    const predictedPrakriti = await Prakruthi.find({ Email: email });

    if (predictedPrakriti.length === 0) {
      return res
        .status(404)
        .json({ error: "Predicted Prakriti not found for the provided email" });
    }

    // Return the predicted Prakriti data
    res.status(200).json(predictedPrakriti);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = Router;
