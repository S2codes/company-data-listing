const User = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = await generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: true,
      maxAge: 1000 * 60 * 60 * 24 * 3,
    });
    res.json({ email: user.email , userId: user._id });
  } catch (error) {
    res.json({ error: error.message });
  }

};

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signUp(email, password);
    const token = await generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24 * 3,
    });
    res.json({ email: user.email , userId: user._id });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
};

module.exports = { loginUser, registerUser, logoutUser };
