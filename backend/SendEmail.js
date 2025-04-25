const nodemailer = require("nodemailer");

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail", // You can use other email services as well
  auth: {
    user: "ayurbotassist@gmail.com", // Replace with your email address
    pass: "Ayurbot@2002", // Replace with your email password
  },
});

function sendPasswordResetEmail(email, resetToken) {
  const mailOptions = {
    from: "ayurbotassist@gmail.com", // Sender's email address
    to: email, // Recipient's email address
    subject: "Password Reset", // Email subject
    html: `Click the following link to reset your password: 
      <a href="http://localhost:3000/resetpasswordpatient/${resetToken}">Reset Password</a>`, // Email content with a link containing the reset token
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = { sendPasswordResetEmail };
