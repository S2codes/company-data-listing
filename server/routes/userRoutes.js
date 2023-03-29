const express = require('express');
const {loginUser, registerUser, logoutUser} = require('../controllers/userController');
const router = express.Router();
const checkAuth = require('../middleware/checkAuth');

router.post('/login', loginUser);
router.post('/signup', registerUser);
router.post('/logout',checkAuth, logoutUser);

module.exports = router;