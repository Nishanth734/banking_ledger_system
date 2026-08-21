const mongoose = require("mongoose");

const account_schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      index: true,
      required: [true, "Account must be associated with user"],
    },
    status: {
      type: String,
      enum: ["ACTIVE", "FROZEN", "CLOSED"],
      default: "ACTIVE",
    },
    currency: {
      type: String,
      required: true,
      default: "INR",
    },
  },
  { timestamps: true }
);

account_schema.index({
  user: 1,
  status: 1,
});

const account_model = mongoose.model("account", account_schema);

module.exports = account_model;