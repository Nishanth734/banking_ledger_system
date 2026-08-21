const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const user_schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: [true, "Name is taken"],
    },
    email: {
      type: String,
      match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email"],
      required: true,
      unique: [true, "Email already exits"],
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

user_schema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

user_schema.methods.comparepassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const usermodel = mongoose.model("user", user_schema);

module.exports = usermodel;