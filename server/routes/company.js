const router = require('express').Router();
const checkAuth = require('../middleware/checkAuth');
const { addNewCompany, getAllCompanies } = require('../controllers/companyController');

router.post('/',checkAuth,addNewCompany);
router.get('/getcompanies',getAllCompanies);

module.exports = router;