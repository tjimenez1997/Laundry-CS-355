const express = require('express');
const router = express.Router();


router.use('/alt', require('./alt'));
router.use('/', require('./home'));
router.use('/sign-up', require('./sign-up'));
router.use('/schedule-a-Pick-Up',require('./schedule-a-Pick-Up'));


module.exports = router;
