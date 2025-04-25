import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"; // Import Axios
import { jwtDecode } from "jwt-decode";
import PatientHomeNavbar from "../components/PatientHomeNavbar";
const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 50%;
  float: left;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Steps = styled.div`
  color: #333;
  font-family: Arial, sans-serif;
`;

const Step = styled.p`
  margin-bottom: 10px;
`;

const Message = styled.p`
  margin-top: 20px;
`;

const BigContainer = styled.p`
  margin-top: 0;
  width: 100%;
`;

const ChatbotInstructions = () => {
  return (
    <BigContainer>
      <PatientHomeNavbar />
      <Container>
        <Heading>Instructions to Find Prakrithi In Chatbot</Heading>
        <Steps>
          <Step>Step 1: Click The chat bot icon in the bottom right</Step>
          <Step>Step 2: Say Hi to initiate chat</Step>
          <Step>Step 3: Complete The questionnaire</Step>
          <Step>Step 4: Click the submit button to find your prakrithi</Step>
        </Steps>
      </Container>
    </BigContainer>
  );
};

const ChatbotPage = () => {
  const [message, setMessage] = useState("");
  const [predictedPrakriti, setPredictedPrakriti] = useState("");
  useEffect(() => {
    // Reload the page only once when mounted
    if (!localStorage.getItem("pageReloaded")) {
      localStorage.setItem("pageReloaded", "true");
      window.location.reload();
    }

    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://mediafiles.botpress.cloud/378c52ac-8093-410c-a70f-060a9f2e43ca/webchat/config.js";
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1); // Clean up the first script tag
      document.body.removeChild(script2); // Clean up the second script tag

      // Remove any remaining chatbot elements from the DOM
      const chatbotElements = document.getElementsByClassName(
        "webchat-fullscreen-container"
      );
      Array.from(chatbotElements).forEach((element) => {
        element.remove();
      });
    };
  }, []);
  useEffect(() => {
    // Reload the page only once when mounted
    if (!localStorage.getItem("pageReloaded")) {
      localStorage.setItem("pageReloaded", "true");
      window.location.reload();
    }

    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const email = decodedToken.patient.email;

      // Fetch predicted Prakriti when component mounts
      fetchPredictedPrakriti(email);
    }
  }, []);

  const fetchPredictedPrakriti = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/viewprakruthi",
        {
          email: email,
        }
      );

      if (!response.data || response.data.length === 0) {
        throw new Error("No data received");
      }

      // Set the predicted Prakriti state
      setPredictedPrakriti(response.data[0].Predicted_PRAKRITI);
      console.log("Predicted Prakriti:", response.data[0].Predicted_PRAKRITI);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/executepythonfile"
      ); // Use Axios to make POST request
      if (response.status === 200) {
        setMessage("Python script executed successfully.");
        alert("Predicted Prakriti: " + predictedPrakriti);
      } else {
        setMessage("An error occurred while executing the Python script.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while making the request.");
    }
  };

  return (
    <>
      <ChatbotInstructions />
      <Container>
        <Button onClick={handleButtonClick}>Send Request</Button>
        {message && <Message>{message}</Message>}
      </Container>
    </>
  );
};

export default ChatbotPage;

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios"; // Import Axios
// import { jwtDecode } from "jwt-decode";
// import PatientHomeNavbar from "../components/PatientHomeNavbar";
// const Button = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Container = styled.div`
//   width: 50%;
//   float: left;
//   padding: 20px;
// `;

// const Heading = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
// `;

// const Steps = styled.div`
//   color: #333;
//   font-family: Arial, sans-serif;
// `;

// const Step = styled.p`
//   margin-bottom: 10px;
// `;

// const Message = styled.p`
//   margin-top: 20px;
// `;

// const BigContainer = styled.p`
//   margin-top: 0;
//   width: 100%;
// `;

// const ChatbotInstructions = () => {
//   return (
//     <BigContainer>
//       <PatientHomeNavbar />
//       <Container>
//         <Heading>Instructions to Find Prakrithi In Chatbot</Heading>
//         <Steps>
//           <Step>Step 1: Click The chat bot icon in the bottom right</Step>
//           <Step>Step 2: Say Hi to initiate chat</Step>
//           <Step>Step 3: Complete The questionnaire</Step>
//           <Step>Step 4: Click the submit button to find your prakrithi</Step>
//         </Steps>
//       </Container>
//     </BigContainer>
//   );
// };

// const ChatbotPage = () => {
//   const [message, setMessage] = useState("");
//   const [predictedPrakriti, setPredictedPrakriti] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       const email = decodedToken.patient.email;

//       // Fetch predicted Prakriti when component mounts
//       fetchPredictedPrakriti(email);
//     }
//   }, []); // This effect runs only on mount

//   useEffect(() => {
//     const script1 = document.createElement("script");
//     script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
//     script1.async = true;
//     document.body.appendChild(script1);

//     const script2 = document.createElement("script");
//     script2.src =
//       "https://mediafiles.botpress.cloud/378c52ac-8093-410c-a70f-060a9f2e43ca/webchat/config.js";
//     script2.defer = true;
//     document.body.appendChild(script2);

//     return () => {
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//       const chatbotElements = document.getElementsByClassName(
//         "webchat-fullscreen-container"
//       );
//       Array.from(chatbotElements).forEach((element) => {
//         element.remove();
//       });
//     };
//   }, [predictedPrakriti]); // This effect runs when predictedPrakriti changes

//   const fetchPredictedPrakriti = async (email) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/viewprakruthi",
//         {
//           email: email,
//         }
//       );

//       if (!response.data || response.data.length === 0) {
//         throw new Error("No data received");
//       }

//       // Set the predicted Prakriti state
//       setPredictedPrakriti(response.data[0].Predicted_PRAKRITI);
//       console.log("Predicted Prakriti:", response.data[0].Predicted_PRAKRITI);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };

//   const handleButtonClick = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/executepythonfile"
//       );
//       if (response.status === 200) {
//         setMessage("Python script executed successfully.");
//         alert("Predicted Prakriti: " + predictedPrakriti);
//       } else {
//         setMessage("An error occurred while executing the Python script.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred while making the request.");
//     }
//   };

//   return (
//     <>
//       <ChatbotInstructions />
//       <Container>
//         <Button onClick={handleButtonClick}>Send Request</Button>
//         {message && <Message>{message}</Message>}
//       </Container>
//     </>
//   );
// };

// export default ChatbotPage;

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios"; // Import Axios
// import { jwtDecode } from "jwt-decode";
// import PatientHomeNavbar from "../components/PatientHomeNavbar";

// const Button = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const Container = styled.div`
//   width: 50%;
//   float: left;
//   padding: 20px;
// `;

// const Heading = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
// `;

// const Steps = styled.div`
//   color: #333;
//   font-family: Arial, sans-serif;
// `;

// const Step = styled.p`
//   margin-bottom: 10px;
// `;

// const Message = styled.p`
//   margin-top: 20px;
// `;

// const BigContainer = styled.div`
//   margin-top: 0;
//   width: 100%;
// `;

// const ChatbotInstructions = () => {
//   return (
//     <BigContainer>
//       <PatientHomeNavbar />
//       <Container>
//         <Heading>Instructions to Find Prakrithi In Chatbot</Heading>
//         <Steps>
//           <Step>Step 1: Click The chat bot icon in the bottom right</Step>
//           <Step>Step 2: Say Hi to initiate chat</Step>
//           <Step>Step 3: Complete The questionnaire</Step>
//           <Step>Step 4: Click the submit button to find your prakrithi</Step>
//         </Steps>
//       </Container>
//     </BigContainer>
//   );
// };

// const ChatbotPage = () => {
//   const [message, setMessage] = useState("");
//   const [predictedPrakriti, setPredictedPrakriti] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const decodedToken = jwtDecode(token);
//       const email = decodedToken.patient.email;

//       // Fetch predicted Prakriti when component mounts
//       fetchPredictedPrakriti(email);
//     }

//     // Load Botpress Web Chat scripts
//     const script1 = document.createElement("script");
//     script1.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
//     script1.async = true;
//     document.body.appendChild(script1);

//     const script2 = document.createElement("script");
//     script2.src =
//       "https://mediafiles.botpress.cloud/378c52ac-8093-410c-a70f-060a9f2e43ca/webchat/config.js";
//     script2.defer = true;
//     document.body.appendChild(script2);

//     return () => {
//       // Cleanup: remove scripts from the DOM
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//     };
//   }, []);

//   const fetchPredictedPrakriti = async (email) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/viewprakruthi",
//         {
//           email: email,
//         }
//       );

//       if (!response.data || response.data.length === 0) {
//         throw new Error("No data received");
//       }

//       // Set the predicted Prakriti state
//       setPredictedPrakriti(response.data[0].Predicted_PRAKRITI);
//       console.log("Predicted Prakriti:", response.data[0].Predicted_PRAKRITI);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };

//   const handleButtonClick = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/executepythonfile"
//       );
//       if (response.status === 200) {
//         setMessage("Python script executed successfully.");
//         alert("Predicted Prakriti: " + predictedPrakriti);
//       } else {
//         setMessage("An error occurred while executing the Python script.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred while making the request.");
//     }
//   };

//   return (
//     <>
//       <ChatbotInstructions />
//       <Container>
//         <Button onClick={handleButtonClick}>Send Request</Button>
//         {message && <Message>{message}</Message>}
//       </Container>
//     </>
//   );
// };

// export default ChatbotPage;
