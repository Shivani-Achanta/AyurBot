import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import DoctorLogin from "./components/DoctorLogin";
import DoctorRegister from "./components/DoctorRegister";
import PatientLogin from "./components/PatientLogin";
import PatientRegister from "./components/PatientRegister";
import DoctorHome from "./screens/DoctorHome";
import PatientHome from "./screens/PatientHome";
import DoctorForgot from "./components/DoctorForgot";
import PatientForgot from "./components/PatientForgot";
import DocConsultChat from "./screens/DocConsultChat";
import PatientProfilePage from "./screens/PatientProfilepage";
import DoctorProfilePage from "./screens/DoctorProfilepage";
import MyAppointmentScreen from "./screens/PatientMyAppointments";
import DocMyAppointment from "./screens/DoctorMyAppointment"; // Import your component
import ChatbotPage from "./screens/Chatbotpage";
import Edu1page from "./pages/Edu1page";
import Aboutpage from "./pages/Aboutpage";
import Key from "./pages/Key";
import Vatapage from "./pages/Vatapage";
import Pittapage from "./pages/Pittapage";
import Kaphapage from "./pages/Kaphapage";
import Vatapittapage from "./pages/Vatapittapage";
import Pittakaphapage from "./pages/Pittakaphapage";
import Vatakaphapage from "./pages/Vatakapha";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login-doctor" element={<DoctorLogin />} />
          <Route path="/register-doctor" element={<DoctorRegister />} />
          <Route path="/login-patient" element={<PatientLogin />} />
          <Route path="/register-patient" element={<PatientRegister />} />
          <Route path="/doctor-home" element={<DoctorHome />} />
          <Route path="/patient-home" element={<PatientHome />} />
          <Route path="/doctor-forgot" element={<DoctorForgot />} />
          <Route path="/patient-forgot" element={<PatientForgot />} />
          <Route path="/consult-chat" element={<DocConsultChat />} />
          <Route path="/patient-profile" element={<PatientProfilePage />} />
          <Route path="/doctor-profile" element={<DoctorProfilePage />} />
          <Route path="/education-prakrithi" element={<Edu1page />} />
          <Route path="/consultations" element={<DocConsultChat />} />
          <Route path="/my-appointments" element={<MyAppointmentScreen />} />
          <Route path="//doc-appointments" element={<DocMyAppointment />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/education-prakrithi" element={<Edu1page />} />
          <Route path="/about-us" element={<Aboutpage />} />
          <Route path="/key" element={<Key />} />
          <Route path="/vata" element={<Vatapage />} />
          <Route path="/pitta" element={<Pittapage />} />
          <Route path="/kapha" element={<Kaphapage />} />
          <Route path="/vatapitta" element={<Vatapittapage />} />
          <Route path="/pittakapha" element={<Pittakaphapage />} />
          <Route path="/vatakapha" element={<Vatakaphapage />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
