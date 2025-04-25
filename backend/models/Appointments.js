// const mongoose = require("mongoose");

// const appointmentSchema = new mongoose.Schema({
//   patient: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Patient",
//     required: true,
//   },
//   doctor: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Doctor",
//     required: true,
//   },
//   query: {
//     type: String,
//     required: true,
//   },
//   dateTime: {
//     type: Date,
//     required: true,
//   },
//   prakruthi: {
//     type: String,
//     required: true,
//   },
// });

// // Define a pre-save hook to update both doctor's and patient's appointments arrays
// appointmentSchema.pre("save", async function (next) {
//   const appointment = this;

//   const [doctor, patient] = await Promise.all([
//     Doctor.findById(appointment.doctor),
//     Patient.findById(appointment.patient),
//   ]);

//   if (!doctor) {
//     return next(new Error("Invalid doctor ID"));
//   }

//   if (!patient) {
//     return next(new Error("Invalid patient ID"));
//   }

//   // Update doctor's appointments
//   doctor.appointments.push(appointment._id);
//   await doctor.save();

//   // Update patient's appointments
//   patient.appointments.push(appointment._id);
//   await patient.save();

//   next();
// });

// module.exports = mongoose.model("Appointment", appointmentSchema);

const mongoose = require("mongoose");
const Doctor = require("./Doctor");
const Patient = require("./Patients");

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  prakruthi: {
    type: String,
    required: true,
  },
});

// Define a pre-save hook to update both doctor's and patient's appointments arrays
appointmentSchema.pre("save", async function (next) {
  const appointment = this;

  const [doctor, patient] = await Promise.all([
    Doctor.findById(appointment.doctor),
    Patient.findById(appointment.patient),
  ]);

  if (!doctor) {
    return next(new Error("Invalid doctor ID"));
  }

  if (!patient) {
    return next(new Error("Invalid patient ID"));
  }

  // Update doctor's appointments
  doctor.appointments.push(appointment._id);
  await doctor.save();

  // Update patient's appointments
  patient.appointments.push(appointment._id);
  await patient.save();

  next();
});
module.exports = mongoose.model("Appointment", appointmentSchema);
