const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// EMAIL API
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "chayashree9842@gmail.com",
        pass: "tdvwvdnumpastrlx"
      }
    });

    const mailOptions = {
      from: "chayashree9842@gmail.com",
      to: "chayashree9842@gmail.com",
      subject: "New Portfolio Message",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

app.listen(5000, () => console.log("Server running on port 5000 🚀"));
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));