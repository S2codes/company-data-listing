const router = require('express').Router();
const getSignature = require('../api/getSign');

router.post('/get-sign', getSignature);

module.exports = router;