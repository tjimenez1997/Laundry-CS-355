const express = require('express');
const router = express.Router();


router.use('/alt', require('./alt'));
router.use('/', require('./home'));
router.use('/sign-up', require('./sign-up'));

module.exports = router;
