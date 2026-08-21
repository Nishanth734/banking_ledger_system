const mongoose = require("mongoose");

const db_connect = async () => {
  try {
    await mongoose.connect(process.env.mongodb_url);
    console.log("database succesfully connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = db_connect;