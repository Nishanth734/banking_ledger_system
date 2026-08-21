const express = require("express");
const authrouter = express.Router();
const { registercontroller, logincontroller } = require("../controllers/auth.controller");

authrouter.post("/register", registercontroller);
authrouter.post("/login", logincontroller);

module.exports = authrouter;