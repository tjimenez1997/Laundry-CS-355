const express = require('express');
const router = express.Router();

//This allows you to create seperate route.js pages for each page.
//Example / refers to home.js

router.use('/', require('./home'));
router.use('/sign-up', require('./sign-up'));
router.use('/schedule',require('./schedule'));
router.use('/all-tasks',require('./all-tasks'));
router.use('/account',require('./account'));

router.use('/debug', require('./debug'));



module.exports = router;
