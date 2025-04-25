const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

// Route to execute the Python script
router.post("/api/executepythonfile", (req, res) => {
  console.log("Executing Python script...");
  exec(
    "python C:/Users/shiva/OneDrive/Desktop/shetty/shivaprasad-s-shetty-Ayurbot/backend/Knime.py",
    (error, stdout, stderr) => {
      if (error) {
        console.error("Error executing Python script:", error);
        return res.status(500).json({
          message: "An error occurred while executing the Python script.",
        });
      }
      console.log("Python script executed successfully.");
      res.json({ message: "Python script executed successfully." });
    }
  );
});

module.exports = router;
