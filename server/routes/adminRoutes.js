const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin.js');
const checkAdmin = require('../middleware/checkAdmin.js');
const { adminController, adminDashboardController, logoutAdmin } = require('../controllers/adminController.js');
const { removeCompany,approveCompany } = require('../controllers/companyController.js');


router.post('/', adminController);
router.get('/dashboard', checkAdmin, adminDashboardController)
router.post('/logout', checkAdmin, logoutAdmin);
router.post('/approve-company',checkAdmin,approveCompany);
router.delete('/delete-company',checkAdmin,removeCompany);

module.exports = router;