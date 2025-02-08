const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

// API Route to handle form submission
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    // Email options
    const mailOptions = {
      from: `"SavvyTech Pvt Ltd" <${process.env.EMAIL_USER}>`, 
      to: "prakash.singh@labryssolutions.com",
      replyTo: email, 
      subject: "📩 New Contact Form Submission",
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
        <hr />
        <p>This email was sent automatically by the contact form on SavvyTech Pvt Ltd.</p>
      `,
    };

    // Send email
    setTimeout(async () => {
      await transporter.sendMail(mailOptions);
    }, 1000); 

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ success: false, error: "Server error, please try again later" });
  }
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
