const accountmodel = require("../models/account.model");

const create = async (req, res) => {
  try {
    const user = req.user;
    const create_account = await accountmodel.create({
      user: user._id,
    });

    return res.status(201).json({
      message: "Account created",
      account: create_account,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = create;