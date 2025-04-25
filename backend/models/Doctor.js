const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const doctorSchema = mongoose.Schema({
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
  specialization: {
    type: String,
    required: true,
  },
  resetToken: String,
  appointments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Appointment", // Reference the Appointment model
  },
});

doctorSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.hash(this.password, 8, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  } else {
    next();
  }
});

module.exports = mongoose.model("Doctor", doctorSchema, "Doctors");
