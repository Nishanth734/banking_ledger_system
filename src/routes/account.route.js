const express = require("express");
const account_router = express.Router();
const check_user = require("../middleware/auth.middleware");
const create = require("../controllers/account.controller");

account_router.post("/create", check_user, create);

module.exports = account_router;