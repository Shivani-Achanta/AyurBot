const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const patientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  appointments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Appointment", // Reference the Appointment model
  },
  // Other patient fields...
});

// Virtual property for patientId (compatible with Mongoose versions >= 4.6.0)
patientSchema.virtual("patientId").get(function () {
  return this._id.toString();
});

// Pre-save hook for password hashing
patientSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      const hash = await bcrypt.hash(this.password, 8);
      this.password = hash;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

// Adjust `toJSON` configuration if necessary
// (default behavior includes virtual properties)
patientSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Patient", patientSchema, "Patients");
