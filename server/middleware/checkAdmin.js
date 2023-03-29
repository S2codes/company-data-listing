require("dotenv").config();
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const checkAdmin = async (req, res, next) => {

    const adminToken = req.cookies.admin;

    if (!adminToken) {
        return res.status(401).json({ error: "You must be logged in as an admin no token" });
    }
    try{
        
        const {_id} = jwt.verify(adminToken, process.env.JWT_SECRET);

        req.admin = await Admin.findOne({ _id }).select('_id');
        next();
    } catch (err) {
        return res.status(401).json({ error: "try block error" });
    }
}

module.exports =  checkAdmin;