const express = require("express");
const cookieParser = require("cookie-parser");
const db_connect = require("./config/db");
const authrouter = require("./routes/auth.route");
const account_router = require("./routes/account.route");

db_connect();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authrouter);
app.use("/api/account", account_router);

module.exports = app;