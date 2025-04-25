const mongoose = require("mongoose");

const OutputSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Predicted_PRAKRITI: {
    type: String,
    required: true,
  },
});

const Output = mongoose.model("Output", OutputSchema, "Outputs");

module.exports = Output;
