const express = require('express');
const router = express.Router();

//This allows you to create seperate route.js pages for each page.
//Example / refers to home.js

router.use('/', require('./home'));
router.use('/sign-up', require('./sign-up'));

module.exports = router;
