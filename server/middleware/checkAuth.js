require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkAuth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "You must be logged in" });
  }

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (err) {
    return res.status(401).json({ error: "You must be logged in" });
  }
};

module.exports = checkAuth;
