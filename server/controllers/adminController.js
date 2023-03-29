const User = require("../models/User");
const Admin = require("../models/Admin");
const Companies = require("../models/Companies");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const adminController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    if (!userId || !password) {
      throw new Error("Credentials are required");
    }
    const admin = await Admin.findOne({ adminId: userId });
    if (!admin) {
      throw new Error("admin doesnot exist");
    }
    const match = await bcrypt.compare(password, admin.adminPassword);
    if (!match) {
      throw new Error("Password is incorrect");
    }
    const adminToken = await generateToken(admin._id);
    res.cookie("admin", adminToken, {
      httpOnly: true,
      secure: true,
      sameSite: true,
      maxAge: 1000 * 60 * 60,
    });
    res.json( {message: admin} );
  } catch (err) {
    console.log("err: ", err);
    res.json({ error: err.message });
  }
};
const logoutAdmin = async (req, res) => {
  res.clearCookie("admin");
  res.json({ message: "Logged out" });
};

const adminDashboardController = async (req, res) => {
const token = req.cookies.admin;
const base64Url = token.split('.')[1];
const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
const decodedPayload = JSON.parse(Buffer.from(base64, 'base64').toString('utf-8'));
const adminExpiryTime = new Date(decodedPayload.exp * 1000).toLocaleString();

  const listCompanies = await Companies.find({isApprvoed: false});
  res.json({ message: "admin dashboard", listedCompanies: listCompanies, adminExpiryTime });
};



module.exports = { adminController, adminDashboardController, logoutAdmin };
