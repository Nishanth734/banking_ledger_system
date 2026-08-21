const jwt = require("jsonwebtoken");
const usermodel = require("../models/user.model");

const check_user = async (req, res, next) => {
  const jwt_token = req.cookies?.token;
  if (!jwt_token) {
    return res.status(401).json({ message: "Please login" });
  }

  try {
    const decoded = jwt.verify(jwt_token, process.env.jwt_secret);
    const user = await usermodel.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    return next();
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = check_user;
