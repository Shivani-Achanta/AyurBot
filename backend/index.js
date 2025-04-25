// const express = require("express");
// const app = express();
// require("./db");

// const PORT = process.env.PORT || 5000;
// app.use(express.json());

// const doctorRouter = require("./Routes/CreateDoctor");
// const patientRouter = require("./Routes/CreatePatient");
// const loginpatient = require("./Routes/LoginPatient");
// // const profilepicchange = require("./Routes/ProfilepicChange");

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use(doctorRouter);
// app.use(patientRouter);
// app.use(loginpatient);
// // app.use(profilepicchange);

// app.listen(PORT, () => {
//   console.log(`App is running in ${PORT}`);
// });

const express = require("express");
const app = express();
require("./db");

const PORT = process.env.PORT || 5000;
app.use(express.json());

const cors = require("cors");

const doctorRouter = require("./Routes/CreateDoctor");
const patientRouter = require("./Routes/CreatePatient");
const loginpatient = require("./Routes/LoginPatient");
const fetchdoc = require("./Routes/DocFetch");
const addappointment = require("./Routes/CreateAppointment");
const showappointments = require("./Routes/FetchAppointment");
const getdocinfo = require(".//Routes/GetDoc");
const logindoctor = require("./Routes/loginDoctor");
const getpatinfo = require("./Routes/GetPatient");
const pythonRoute = require("./Routes/PythonRoute");
const viewprakruthi = require("./Routes/ViewPrakruthi");

// const profilepicchangeRouter = require("./Routes/ProfilepicChange"); // Import the profilepicchange route

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());

app.use(viewprakruthi);
app.use(pythonRoute);
app.use(getpatinfo);
app.use(logindoctor);
app.use(getdocinfo);
app.use(showappointments);
app.use(addappointment);
app.use(fetchdoc);
app.use(doctorRouter);
app.use(patientRouter);
app.use(loginpatient);
// app.use(profilepicchangeRouter); // Use the profilepicchange route

app.listen(PORT, () => {
  console.log(`App is running in ${PORT}`);
});
