# AyurBot 🌿

**AyurBot** is a modern web application that blends the ancient wisdom of Ayurveda with the power of modern machine learning and web technologies. Built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js), AyurBot offers personalized insights into users' Ayurvedic constitution (Prakriti), virtual consultations with practitioners, and educational resources to promote holistic well-being.

---

## 🌱 What is Ayurveda?

Ayurveda is an ancient Indian holistic healing system emphasizing balance between the **mind**, **body**, and **spirit**. It centers around the concept of **Tridosha** — the three fundamental energies:

- 🔵 **Vata** (air & space)  
- 🔴 **Pitta** (fire & water)  
- 🟢 **Kapha** (water & earth)

Every individual has a unique balance of these doshas, known as their **Prakriti**, which influences their health, personality, and lifestyle needs.

---

## 💡 Project Overview

AyurBot is a technological bridge between **traditional Ayurvedic science** and **modern predictive modeling**. Through an intuitive web interface and powerful backend logic, users can:

- Discover their **Prakriti** type via a personalized quiz trained on an SVM algorithm  
- Connect with verified **Ayurvedic practitioners** for telemedicine consultations  
- Access curated content and recommendations for a balanced lifestyle  

---

## 🔥 Features

- 🧠 **Prakriti Prediction**  
  An ML-powered quiz that determines your Ayurvedic constitution using SVM classification.

- 🧑‍⚕️ **Telemedicine Consultation Integration**  
  Connect with professional Ayurvedic doctors virtually.

- 🌐 **Fully Developed MERN Stack Website**  
  Responsive and user-friendly design for a seamless experience.

---

## 🚀 Tech Stack

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Machine Learning**: Python (Pandas, pymongo, Scikit-learn)  
  - SVM (Support Vector Machine) model for classification  
  - Prototyped using KNIME before coding in Python  
- **Others**: REST APIs, Nodemon

---

## 🛠️ Getting Started

### ✅ Prerequisites

Make sure you have the following installed:

- Node.js & npm
- MongoDB
- Python (if running the ML model separately)

---

### 📦 Installation Steps

1. **Clone the Repository**
   git clone https://github.com/your-username/ayurbot.git
   cd ayurbot

2. **Install Frontend Dependencies**
   npm install

3. **Start the Backend Server**
   cd backend
   npm install
   nodemon app.js

4. **Start the Frontend App**
   cd ..
   npm start
