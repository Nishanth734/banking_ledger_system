require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email_user || process.env.EMAIL_USER,
    pass: (process.env.email_pass || process.env.EMAIL_PASS || "").replace(/\s+/g, ""),
  },
});

const sendRegistrationMail = async (usermail, name) => {
  try {
    const sender = process.env.email_user || process.env.EMAIL_USER;
    if (!sender || !usermail) return;

    const mailOptions = {
      from: `"LedgerPro" <${sender}>`,
      to: usermail,
      subject: "Welcome to LedgerPro - Registration Successful",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #4f46e5;">Welcome to LedgerPro, ${name}!</h2>
          <p style="font-size: 15px; color: #555;">Your account has been successfully created. We are excited to have you on board.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 13px; color: #888;">If you did not sign up for this account, you can safely ignore this email.</p>
          <p style="font-size: 14px; color: #333;">Best regards,<br /><strong>LedgerPro Team</strong></p>
        </div>
      `,
      text: `Hello ${name},\n\nYour account has been successfully created with LedgerPro.\n\nBest regards,\nLedgerPro Team`,
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  sendRegistrationMail,
  registartionmail: sendRegistrationMail,
};
