const router = require('express').Router();
const {accessController} = require('../controllers/genAccessController');

router.get('/', accessController);

module.exports = router;