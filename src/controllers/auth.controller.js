const usermodel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { sendRegistrationMail } = require("../services/mail.services");

const signToken = (userId) => {
  return jwt.sign({ userId }, process.env.jwt_secret, { expiresIn: "3d" });
};

const attachCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });
};

const registercontroller = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    const existing = await usermodel.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const user = await usermodel.create({ name, email, password });
    const token = signToken(user._id);
    attachCookie(res, token);

    res.status(201).json({
      message: "Registration successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    });

    setImmediate(() => {
      sendRegistrationMail(email, name).catch((err) => console.error(err.message));
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const logincontroller = async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ message: "Name and password are required" });
    }

    const user = await usermodel.findOne({ name }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Please register first" });
    }

    const isMatch = await user.comparepassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = signToken(user._id);
    attachCookie(res, token);

    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { registercontroller, logincontroller };
